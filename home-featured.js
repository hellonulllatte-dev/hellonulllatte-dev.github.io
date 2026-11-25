(() => {
  'use strict';
  const root = document.querySelector('.home-featured');
  if (!root) return;
  const viewport = root.querySelector('.hf-window');
  const track = root.querySelector('.hf-track');
  const pause = root.querySelector('.hf-pause');
  const ids = ['koyoi-kimi-wo-ubaimashou', 'gyutto-call', 'tsuitayo-shita-3punne', 'wordland', 'censor-valentine', 'oneesan-still-sleeping'];
  const games = ids.map(id => (window.NULLLATTE_GAMES || []).find(g => g.id === id)).filter(Boolean);
  const n = games.length;
  if (!n) { root.hidden = true; return; }
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let index = n, offset = 0, step = 0, timer, finishTimer, moving = false, drag = null, suppress = false;
  let hover = false, focused = false, paused = motion.matches;
  const lang = () => window.NulllatteI18n?.language || 'ja';
  function link(data) {
    const a = document.createElement('a');
    a.href = data.href; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.draggable = false;
    return a;
  }
  const cards = [];
  for (let i = 0; i < n * 3; i++) {
    const g = games[i % n];
    const links = g.links.filter(l => l.provider !== 'media-kit');
    const card = document.createElement('article'); card.className = 'hf-card'; card.dataset.gameId = g.id;
    const main = link(links[0]); main.className = 'hf-main';
    const img = document.createElement('img'); img.src = g.id === 'gyutto-call' ? 'images/cast_sena.png' : g.image; img.alt = g.imageAlt; img.draggable = false;
    const title = document.createElement('h3'); title.textContent = g.title;
    const desc = document.createElement('p'); desc.textContent = g.description[lang()];
    main.append(img, title, desc); card.append(main);
    const row = document.createElement('div'); row.className = 'game-links';
    links.forEach(l => { const a = link(l); a.textContent = l.label; row.append(a); });
    card.append(row); track.append(card); cards.push({card, desc, g});
  }
  function labels() {
    cards.forEach(({desc,g}) => { desc.textContent = g.description[lang()]; });
    root.querySelector('.hf-prev').setAttribute('aria-label', lang() === 'ja' ? '前の作品' : 'Previous game');
    root.querySelector('.hf-next').setAttribute('aria-label', lang() === 'ja' ? '次の作品' : 'Next game');
    pause.textContent = paused ? '▶' : 'Ⅱ';
    pause.setAttribute('aria-label', paused ? (lang() === 'ja' ? '自動送りを再開' : 'Resume autoplay') : (lang() === 'ja' ? '自動送りを停止' : 'Pause autoplay'));
  }
  function position(x, animate = false) {
    track.style.transition = animate && !motion.matches ? 'transform 1200ms cubic-bezier(.45,0,.25,1)' : 'none';
    track.style.transform = `translate3d(${x}px,0,0)`; offset = x;
  }
  function target(i) { return (viewport.clientWidth - cards[0].card.offsetWidth) / 2 - i * step; }
  function update() {
    root.querySelector('.hf-count').textContent = `${String(index % n + 1).padStart(2,'0')} / ${String(n).padStart(2,'0')}`;
    cards.forEach(({card}, i) => {
      const visible = Math.abs(i - index) <= Math.ceil(viewport.clientWidth / (2 * step));
      card.setAttribute('aria-hidden', String(!visible));
      card.querySelectorAll('a').forEach(a => { a.tabIndex = i === index ? 0 : -1; });
    });
  }
  function schedule() {
    clearTimeout(timer);
    if (!paused && !hover && !focused && !drag && !moving && !document.hidden && !motion.matches) timer = setTimeout(() => go(index + 1), 4000);
  }
  function settle() {
    clearTimeout(finishTimer); moving = false;
    index = n + ((index % n) + n) % n;
    position(target(index)); update(); schedule();
  }
  function go(next) {
    clearTimeout(timer); clearTimeout(finishTimer);
    index = Math.max(1, Math.min(n * 3 - 2, next)); moving = true;
    position(target(index), true); update();
    if (motion.matches) settle(); else finishTimer = setTimeout(settle, 1220);
  }
  function measure() {
    step = cards[1].card.offsetLeft - cards[0].card.offsetLeft;
    if (!step) step = cards[0].card.offsetWidth + parseFloat(getComputedStyle(track).gap);
    settle();
  }
  root.querySelector('.hf-prev').addEventListener('click', () => { if(moving) settle(); go(index - 1); });
  root.querySelector('.hf-next').addEventListener('click', () => { if(moving) settle(); go(index + 1); });
  pause.addEventListener('click', () => { paused = !paused; labels(); schedule(); });
  root.addEventListener('pointerover', e => {
    if (e.pointerType !== 'mouse') return;
    const next = Boolean(e.target.closest('.game-links a, .hf-controls button'));
    if (next !== hover) { hover = next; schedule(); }
  });
  root.addEventListener('pointerleave', () => { if (hover) { hover = false; schedule(); } });
  root.addEventListener('focusin', e => { focused = e.target.matches(':focus-visible'); schedule(); });
  root.addEventListener('focusout', e => { focused = Boolean(e.relatedTarget && root.contains(e.relatedTarget) && e.relatedTarget.matches(':focus-visible')); schedule(); });
  root.addEventListener('keydown', e => { if (['ArrowLeft','ArrowRight'].includes(e.key)) { e.preventDefault(); if (moving) settle(); go(index + (e.key === 'ArrowRight' ? 1 : -1)); } });
  viewport.addEventListener('pointerdown', e => {
    if (!e.isPrimary || e.button !== 0) return;
    clearTimeout(timer); suppress = false;
    drag = { id:e.pointerId, x:e.clientX, y:e.clientY, active:false, start:offset };
  });
  viewport.addEventListener('pointermove', e => {
    if (!drag || e.pointerId !== drag.id) return;
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (!drag.active) {
      if (Math.abs(dx) < 8 || Math.abs(dx) < Math.abs(dy)) return;
      const matrix = new DOMMatrixReadOnly(getComputedStyle(track).transform);
      drag.start = matrix.m41; clearTimeout(finishTimer); moving = false;
      drag.active = true; suppress = true; viewport.setPointerCapture(e.pointerId); viewport.classList.add('hf-dragging');
    }
    position(drag.start + Math.max(-step * 2, Math.min(step * 2, dx)));
  });
  function release(e) {
    if (!drag || drag.id !== e.pointerId) return;
    const active = drag.active; drag = null; viewport.classList.remove('hf-dragging');
    if (active) { const nearest = Math.round(((viewport.clientWidth - cards[0].card.offsetWidth) / 2 - offset) / step); go(nearest); setTimeout(() => { suppress = false; }, 0); }
    else schedule();
  }
  viewport.addEventListener('pointerup', release); viewport.addEventListener('pointercancel', release);
  window.addEventListener('pointerup', release);
  viewport.addEventListener('click', e => { if (suppress) { e.preventDefault(); e.stopPropagation(); suppress = false; } }, true);
  viewport.addEventListener('dragstart', e => e.preventDefault());
  window.addEventListener('nulllatte:languagechange', labels);
  document.addEventListener('visibilitychange', schedule);
  motion.addEventListener('change', () => { paused = motion.matches; labels(); settle(); });
  new ResizeObserver(measure).observe(viewport);
  labels(); measure();
})();
