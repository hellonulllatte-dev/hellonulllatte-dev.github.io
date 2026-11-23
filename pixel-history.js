(() => {
  'use strict';

  const source = Array.isArray(window.NULLLATTE_GAMES) ? window.NULLLATTE_GAMES : [];
  const games = [...source].sort((a, b) =>
    a.releaseDate.localeCompare(b.releaseDate) || a.displayOrder - b.displayOrder
  );
  const COLORS = ['#3a323c', '#a37370', '#cca795', '#6b5258'];
  const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)');

  document.querySelectorAll('[data-pixel-history]').forEach(root => {
    const itemCount = games.length;
    if (!itemCount) return;

    const panel = root.querySelector('.pixel-history-drag-panel');
    const track = root.querySelector('.pixel-history-dot-track');
    const currentNumber = root.querySelector('[data-ph-current]');
    const totalNumber = root.querySelector('[data-ph-total]');
    const imageLink = root.querySelector('[data-ph-image-link]');
    const image = root.querySelector('[data-ph-image]');
    const date = root.querySelector('[data-ph-date]');
    const title = root.querySelector('[data-ph-title]');
    const description = root.querySelector('[data-ph-description]');
    const links = root.querySelector('[data-ph-links]');
    let value = 0;
    let animationFrame = 0;
    let drag = null;
    let spacing = 28;
    let previewIndex = -1;

    const dots = games.map((game, index) => {
      const slot = document.createElement('span');
      const dot = document.createElement('button');
      slot.className = 'pixel-history-dot-slot';
      slot.style.setProperty('--index', index);
      dot.className = 'pixel-history-dot';
      dot.type = 'button';
      dot.tabIndex = -1;
      dot.dataset.number = String(index + 1);
      dot.dataset.gameId = game.id;
      dot.setAttribute('aria-label', `${String(index + 1).padStart(2, '0')} ${game.title}`);
      dot.style.setProperty('--dot-color', COLORS[index % COLORS.length]);
      slot.append(dot);
      track.append(slot);
      return dot;
    });

    totalNumber.textContent = String(itemCount).padStart(2, '0');
    panel.setAttribute('aria-valuemax', String(itemCount));

    const clamp = (number, min, max) => Math.max(min, Math.min(max, number));
    const language = () => {
      if (window.NulllatteI18n) return window.NulllatteI18n.language;
      try { return localStorage.getItem('nulllatte-language') === 'en' ? 'en' : 'ja'; }
      catch (_) { return 'ja'; }
    };

    function focusFor(index, position) {
      const spread = Number.parseFloat(getComputedStyle(root).getPropertyValue('--ph-focus-spread')) || .72;
      const distance = Math.abs(index - position);
      return Math.exp(-(distance * distance) / (2 * spread * spread));
    }

    function updatePreview(index, force = false) {
      const game = games[index];
      if (!game) return;
      if (force || previewIndex !== index) {
        previewIndex = index;
        image.src = game.image;
        image.alt = game.imageAlt;
        imageLink.href = game.links[0]?.href || 'games.html';
        title.textContent = game.title;
        date.textContent = game.releaseDate;
        links.replaceChildren();
        game.links.forEach(link => {
          const anchor = document.createElement('a');
          anchor.href = link.href;
          anchor.target = '_blank';
          anchor.rel = 'noopener noreferrer';
          anchor.textContent = link.label;
          links.append(anchor);
        });
      }
      description.textContent = game.description[language() === 'en' ? 'en' : 'ja'];
    }

    function measure() {
      spacing = clamp((panel.clientWidth - 48) / Math.max(1, Math.min(itemCount, 20) - 1), 18, 44);
      track.style.setProperty('--dot-spacing', `${spacing}px`);
      render(value);
    }

    function render(position) {
      value = clamp(position, 0, itemCount - 1);
      const nearest = Math.round(value);
      track.style.setProperty('--track-x', `${panel.clientWidth / 2 - value * spacing}px`);
      dots.forEach((dot, index) => {
        const focus = focusFor(index, value);
        dot.style.setProperty('--focus', focus.toFixed(4));
        dot.classList.toggle('is-nearest', index === nearest);
      });
      const number = String(nearest + 1).padStart(2, '0');
      currentNumber.textContent = number;
      panel.setAttribute('aria-valuenow', String(nearest + 1));
      panel.setAttribute('aria-valuetext', `${number} ${games[nearest].title}`);
      image.style.setProperty('--preview-scale', String(.985 + focusFor(nearest, value) * .015));
      updatePreview(nearest);
    }

    function stopAnimation() {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    }

    function springTo(target, initialVelocity = 0) {
      stopAnimation();
      const destination = clamp(Math.round(target), 0, itemCount - 1);
      if (REDUCED_MOTION.matches) { render(destination); return; }
      let position = value;
      let velocity = clamp(initialVelocity, -5, 5);
      let previous = performance.now();
      function animate(now) {
        const dt = Math.min((now - previous) / 1000, .032);
        previous = now;
        const acceleration = (destination - position) * 175 - velocity * 24;
        velocity += acceleration * dt;
        position += velocity * dt;
        render(position);
        if (Math.abs(destination - position) < .001 && Math.abs(velocity) < .01) {
          render(destination);
          animationFrame = 0;
        } else animationFrame = requestAnimationFrame(animate);
      }
      animationFrame = requestAnimationFrame(animate);
    }

    panel.addEventListener('pointerdown', event => {
      if (event.button !== 0) return;
      stopAnimation();
      panel.focus({ preventScroll: true });
      panel.setPointerCapture(event.pointerId);
      panel.classList.add('is-dragging');
      drag = { id: event.pointerId, startX: event.clientX, startValue: value, lastTime: event.timeStamp, velocity: 0, moved: false, dot: event.target.closest('.pixel-history-dot') };
    });

    panel.addEventListener('pointermove', event => {
      if (!drag || event.pointerId !== drag.id) return;
      const dx = event.clientX - drag.startX;
      const next = clamp(drag.startValue - dx / spacing, 0, itemCount - 1);
      const dt = Math.max(1, event.timeStamp - drag.lastTime);
      drag.velocity = (next - value) / (dt / 1000);
      drag.lastTime = event.timeStamp;
      if (Math.abs(dx) > 6) drag.moved = true;
      render(next);
    });

    function finishDrag(event, cancelled = false) {
      if (!drag || event.pointerId !== drag.id) return;
      const current = drag;
      drag = null;
      panel.classList.remove('is-dragging');
      if (panel.hasPointerCapture(event.pointerId)) panel.releasePointerCapture(event.pointerId);
      if (!cancelled && !current.moved && current.dot) springTo(Number(current.dot.dataset.number) - 1);
      else springTo(value, current.velocity * .18);
    }

    panel.addEventListener('pointerup', event => finishDrag(event));
    panel.addEventListener('pointercancel', event => finishDrag(event, true));
    panel.addEventListener('keydown', event => {
      const nearest = Math.round(value);
      let destination = null;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') destination = nearest - 1;
      if (event.key === 'ArrowRight' || event.key === 'ArrowUp') destination = nearest + 1;
      if (event.key === 'Home') destination = 0;
      if (event.key === 'End') destination = itemCount - 1;
      if (destination !== null) { event.preventDefault(); springTo(destination); }
    });

    window.addEventListener('nulllatte:languagechange', () => updatePreview(Math.round(value), true));
    window.addEventListener('resize', measure);
    window.addEventListener('pageshow', () => { stopAnimation(); render(0); });
    updatePreview(0, true);
    measure();
  });
})();
