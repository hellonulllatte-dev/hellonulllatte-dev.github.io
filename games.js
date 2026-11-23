(() => {
  'use strict';

  const games = Array.isArray(window.NULLLATTE_GAMES)
    ? [...window.NULLLATTE_GAMES].sort((a, b) => a.displayOrder - b.displayOrder)
    : [];
  const grid = document.querySelector('.game-grid');
  const filters = document.querySelectorAll('.flavor-filters button');
  if (!grid) return;

  const readLanguage = () => {
    if (window.NulllatteI18n) return window.NulllatteI18n.language;
    try { return localStorage.getItem('nulllatte-language') === 'en' ? 'en' : 'ja'; }
    catch (_) { return 'ja'; }
  };
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const segment = text => (typeof Intl.Segmenter === 'function'
    ? Array.from(new Intl.Segmenter(undefined, {granularity: 'grapheme'}).segment(text), part => part.segment)
    : Array.from(text));
  // MUG SE MAKER export: only play in response to user interaction.
  const buttonAudio = new Audio('sounds/pochi_024.wav');
  buttonAudio.preload = 'auto';
  buttonAudio.volume = 0.45;
  function playButtonSound() {
    try {
      buttonAudio.pause();
      buttonAudio.currentTime = 0;
      const playback = buttonAudio.play();
      if (playback?.catch) playback.catch(() => {});
    } catch (_) { /* Sound is optional. */ }
  }
  // POPOPO MAKER export: short voice sound while text is being typed.
  // A small pool avoids cutting off the previous 137 ms sound on quick characters.
  const voicePool = Array.from({ length: 3 }, () => {
    const audio = new Audio('sounds/popopo_poyo_3-0.wav');
    audio.preload = 'auto';
    audio.volume = 0.24;
    return audio;
  });
  let voiceIndex = 0;
  function pop() {
    if (reducedMotion.matches) return;
    try {
      const audio = voicePool[voiceIndex];
      voiceIndex = (voiceIndex + 1) % voicePool.length;
      audio.pause();
      audio.currentTime = 0;
      const playback = audio.play();
      if (playback?.catch) playback.catch(() => {});
    } catch (_) { /* Audio is optional. */ }
  }

  const cards = games.map(game => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.dataset.gameId = game.id;
    card.dataset.flavors = game.flavors.join(' ');
    card.dataset.i18nIgnore = '';

    const image = document.createElement('img');
    image.src = game.image;
    image.alt = game.imageAlt;

    const info = document.createElement('div');
    info.className = 'game-card-info';
    const heading = document.createElement('div');
    heading.className = 'game-note-heading';
    const title = document.createElement('h3');
    title.textContent = game.title;
    heading.append(title);

    const description = document.createElement('p');
    description.className = 'game-description';

    const links = document.createElement('div');
    links.className = 'game-links';
    game.links.forEach(link => {
      const anchor = document.createElement('a');
      anchor.href = link.href;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
      anchor.textContent = link.label;
      links.append(anchor);
    });
    const normalBody = document.createElement('div');
    normalBody.className = 'game-note-normal-body';
    normalBody.append(description, links);
    info.append(heading, normalBody);
    card.append(image, info);

    const noteData = game.devNote;
    let noteUI = null;
    const noteLines = lang => Array.isArray(noteData?.[lang]) ? noteData[lang]
      : Array.isArray(noteData?.ja) ? noteData.ja : [];

    if (noteLines('ja').length || noteLines('en').length) {
      const toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'game-note-toggle';
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', '制作メモを開く');
      toggle.title = '制作メモ';
      const icon = document.createElement('img');
      icon.src = 'images/memo_icon.png';
      icon.alt = '';
      icon.className = 'game-note-icon';
      const closeIcon = document.createElement('span');
      closeIcon.className = 'game-note-x';
      closeIcon.textContent = '×';
      closeIcon.setAttribute('aria-hidden', 'true');
      toggle.append(icon, closeIcon);
      heading.append(toggle);

      const novel = document.createElement('div');
      novel.className = 'game-note-novel';
      novel.hidden = true;
      const dialogue = document.createElement('button');
      dialogue.type = 'button';
      dialogue.className = 'game-note-dialogue';
      dialogue.setAttribute('aria-label', '文章を表示・次へ');
      const text = document.createElement('span');
      text.className = 'game-note-text';
      const bottom = document.createElement('span');
      bottom.className = 'game-note-bottom';
      const progress = document.createElement('span');
      const next = document.createElement('img');
      next.src = 'images/sankaku_03.gif';
      next.alt = '';
      next.className = 'game-note-next';
      next.hidden = true;
      bottom.append(progress, next);
      dialogue.append(text, bottom);
      novel.append(dialogue);
      info.append(novel);

      let open = false;
      let page = 0;
      let timer = 0;
      let writing = false;
      let chars = [];
      let shown = 0;
      const cancelTyping = () => { if (timer) clearTimeout(timer); timer = 0; writing = false; };
      const OPEN_NOTE_PAUSE_MS = 420; // Let the opening click sound finish before typing starts.
      const showPage = (instant = false, startDelay = 0) => {
        cancelTyping();
        const lines = noteLines(readLanguage() === 'en' ? 'en' : 'ja');
        if (!lines.length) { text.textContent = ''; progress.textContent = ''; next.hidden = true; return; }
        page = Math.min(page, lines.length - 1);
        chars = segment(lines[page]);
        progress.textContent = `${page + 1} / ${lines.length}`;
        next.hidden = true;
        if (instant || reducedMotion.matches) { text.textContent = chars.join(''); shown = chars.length; next.hidden = false; return; }
        shown = 0; text.textContent = ''; writing = true;
        const step = () => {
          if (!open) return;
          if (shown >= chars.length) { writing = false; timer = 0; next.hidden = false; return; }
          const char = chars[shown++];
          text.textContent += char;
          if (shown % 3 === 0 && !/^\s|[。、！？,.!?]$/.test(char)) pop();
          timer = setTimeout(step, 40);
        };
        if (startDelay > 0) timer = setTimeout(step, startDelay);
        else step();
      };
      const setOpen = state => {
        open = state;
        normalBody.hidden = state;
        novel.hidden = !state;
        toggle.classList.toggle('is-open', state);
        toggle.setAttribute('aria-expanded', String(state));
        toggle.setAttribute('aria-label', readLanguage() === 'en' ? (state ? 'Close development note' : 'Open development note') : (state ? '制作メモを閉じる' : '制作メモを開く'));
        toggle.title = state ? (readLanguage() === 'en' ? 'Close note' : 'メモを閉じる') : (readLanguage() === 'en' ? 'Development note' : '制作メモ');
        if (state) { page = 0; showPage(false, OPEN_NOTE_PAUSE_MS); dialogue.focus({preventScroll:true}); }
        else { cancelTyping(); toggle.focus({preventScroll:true}); }
      };
      toggle.addEventListener('click', () => { if (!open) playButtonSound(); setOpen(!open); });
      dialogue.addEventListener('click', () => {
        if (writing) { cancelTyping(); text.textContent = chars.join(''); shown = chars.length; next.hidden = false; return; }
        const lines = noteLines(readLanguage() === 'en' ? 'en' : 'ja');
        if (page < lines.length - 1) { page++; showPage(); }
        else setOpen(false);
      });
      info.addEventListener('keydown', event => { if (open && event.key === 'Escape') { event.preventDefault(); setOpen(false); } });
      noteUI = { refresh: () => {
        if (open) showPage(true);
        const isEn = readLanguage() === 'en';
        toggle.setAttribute('aria-label', isEn ? (open ? 'Close development note' : 'Open development note') : (open ? '制作メモを閉じる' : '制作メモを開く'));
        toggle.title = isEn ? (open ? 'Close note' : 'Development note') : (open ? 'メモを閉じる' : '制作メモ');
        dialogue.setAttribute('aria-label', isEn ? 'Show text or next line' : '文章を表示・次へ');
      } };
    }

    grid.append(card);
    return { element: card, description, noteUI, game };
  });

  function updateLanguage(lang = readLanguage()) {
    const key = lang === 'en' ? 'en' : 'ja';
    cards.forEach(({description, noteUI, game}) => {
      description.textContent = game.description?.[key] || game.description?.ja || '';
      noteUI?.refresh();
    });
  }

  filters.forEach(button => {
    button.addEventListener('click', () => {
      const flavor = button.dataset.flavor;
      filters.forEach(filter => filter.classList.toggle('active', filter === button));
      cards.forEach(({element,game}) => {
        element.hidden = flavor !== 'all' && !game.flavors.includes(flavor);
      });
    });
  });

  window.addEventListener('nulllatte:languagechange', event => updateLanguage(event.detail?.language));
  updateLanguage();
})();
