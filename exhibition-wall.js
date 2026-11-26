
(() => {
  'use strict';
  const ticket = document.getElementById('wordland-ticket');
  const picture = document.getElementById('wordland-ticket-image');
  const gate = document.getElementById('wordland-gate');
  const frames = [
    'images/wordland/ticket-full.png',
    'images/wordland/ticket-tear.png',
    'images/wordland/ticket-used.png'
  ];
  let entering = false;
  // Preload images to avoid a blank ticket between frames.
  frames.slice(1).concat('wordland/assets/wordland-logo.png').forEach(src => {
    const img = new Image();
    img.src = src;
  });
  ticket.addEventListener('click', () => {
    if (entering) return;
    entering = true;
    ticket.disabled = true;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    picture.src = frames[1];
    setTimeout(() => { picture.src = frames[2]; }, reduced ? 80 : 260);
    setTimeout(() => {
      gate.classList.add('is-visible');
      gate.setAttribute('aria-hidden', 'false');
    }, reduced ? 180 : 850);
    setTimeout(() => {
      // The destination uses the same logo curtain, then fades it out over the park.
      try { sessionStorage.setItem('wordland-ticket-entered', '1'); } catch (_) {}
      window.location.assign('wordland/index.html');
    }, reduced ? 340 : 2500);
  });
  // Restore the ticket when returning from the browser back-forward cache.
  window.addEventListener('pageshow', () => {
    entering = false;
    ticket.disabled = false;
    picture.src = frames[0];
    gate.classList.remove('is-visible');
    gate.setAttribute('aria-hidden', 'true');
  });
})();

(()=>{
 if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 const observer=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){e.target.classList.remove('wall-pending');e.target.classList.add('wall-reveal');observer.unobserve(e.target)}},{threshold:0});
 for(const item of document.querySelectorAll('.exhibition-wall .print')){
  if(item.getBoundingClientRect().top>=innerHeight){item.classList.add('wall-pending');observer.observe(item);item.addEventListener('focus',()=>{item.classList.remove('wall-pending');observer.unobserve(item)},{once:true})}
 }
})();
