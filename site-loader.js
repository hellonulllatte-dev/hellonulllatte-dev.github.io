/* Release after page initialization and current fonts, not all images. */
(() => {
  'use strict';
  const root = document.documentElement;
  const boot = window.__nlLoaderBoot;
  if (!boot || !root.classList.contains('nl-loading')) return;
  const overlay = document.getElementById('nl-loader');
  if (!overlay) { boot.reset(); return; }
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let done = false, cleanupTimer;
  function finish() {
    if (done || !root.classList.contains('nl-loading')) return;
    done = true;
    clearTimeout(boot.dotsTimer);
    clearTimeout(boot.fallbackTimer);
    void overlay.offsetWidth;
    root.classList.remove('nl-waiting');
    root.classList.add('nl-revealing');
    root.classList.remove('nl-loading');
    const cleanup = () => {
      root.classList.remove('nl-revealing');
      overlay.hidden = true;
      clearTimeout(cleanupTimer);
    };
    if (reduced.matches) cleanup();
    else {
      overlay.addEventListener('transitionend', e => {
        if (e.target === overlay && e.propertyName === 'opacity') cleanup();
      }, {once:true});
      cleanupTimer = setTimeout(cleanup, 420);
    }
  }
  async function ready() {
    try {
      await new Promise(resolve => requestAnimationFrame(resolve));
      void document.body.offsetWidth;
      if (document.fonts) await document.fonts.ready;
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    } catch (_) { /* An optional resource must not hide the page permanently. */ }
    finish();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready, {once:true});
  else ready();
  window.addEventListener('pageshow', e => {
    if (e.persisted) { done = true; clearTimeout(cleanupTimer); boot.reset(); }
  });
})();
