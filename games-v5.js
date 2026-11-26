
(()=>{
 const filters=document.querySelector('.flavor-filters');
 const buttons=[...filters.querySelectorAll('button')],dot=filters.querySelector('.filter-dot');
 let preview=null;
 const selected=()=>buttons.find(b=>b.classList.contains('active'))||buttons[0];
 function move(button){
   const a=button.getBoundingClientRect(),b=filters.getBoundingClientRect();
   dot.style.setProperty('--filter-x',`${a.left-b.left+a.width/2-dot.offsetWidth/2}px`);
   dot.style.setProperty('--filter-y',`${a.bottom-b.top-5}px`);
 }
 function update(){const active=selected();buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===active)));move(preview||active);}
 for(const b of buttons){
   b.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'||e.pointerType==='pen'){preview=b;update();}});
   b.addEventListener('focus',()=>{if(b.matches(':focus-visible')){preview=b;update();}});
   b.addEventListener('blur',()=>{if(preview===b){preview=null;update();}});
   b.addEventListener('click',()=>{preview=null;update();});
 }
 filters.addEventListener('pointerleave',()=>{preview=null;update();});
 window.addEventListener('resize',update);
 window.addEventListener('nulllatte:languagechange',()=>requestAnimationFrame(update));
 if(document.fonts)document.fonts.ready.then(update);
 if('ResizeObserver' in window){const ro=new ResizeObserver(update);ro.observe(filters);buttons.forEach(b=>ro.observe(b));}
 update();requestAnimationFrame(()=>{update();dot.classList.add('ready');});
})();

(()=>{
 const grid=document.querySelector('.game-grid');
 const cards=[...grid.querySelectorAll('.game-card')];
 const buttons=[...document.querySelectorAll('.flavor-filters button')];
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 if(!cards.length||reduced.matches||!('IntersectionObserver' in window))return;
 let stopped=false;
 const clean=card=>{card.classList.remove('reveal-pending','reveal-entering');card.style.removeProperty('--reveal-delay');};
 const observer=new IntersectionObserver(entries=>{
   if(stopped)return;
   const entering=entries.filter(e=>e.isIntersecting&&e.target.classList.contains('reveal-pending')).map(e=>e.target).sort((a,b)=>cards.indexOf(a)-cards.indexOf(b));
   entering.forEach((card,i)=>{
     observer.unobserve(card);
     card.style.setProperty('--reveal-delay',`${Math.min(i,2)*90}ms`);
     card.classList.remove('reveal-pending');card.classList.add('reveal-entering');
   });
 },{threshold:0.1});
 function finish(){stopped=true;observer.disconnect();cards.forEach(clean);}
 cards.forEach(card=>{
   card.classList.add('reveal-pending');observer.observe(card);
   card.addEventListener('animationend',e=>{if(e.target===card&&e.animationName==='games-card-in')clean(card);});
   card.addEventListener('focusin',()=>{observer.unobserve(card);clean(card);});
 });
 // Once a category is chosen, all subsequent filter results are immediate,
 // including a return to ALL. Refreshing the document starts a new visit.
 buttons.forEach(b=>b.addEventListener('click',()=>{if(b.dataset.flavor!=='all')finish();},{capture:true}));
 reduced.addEventListener?.('change',e=>{if(e.matches)finish();});
})();


(()=>{
 const trigger=document.querySelector('#guidelines-trigger');
 const modal=document.querySelector('#guidelines');
 const root=document.documentElement;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 if(!trigger||!modal)return;
 let closing=false,previousFocus=null,timer=0,backdropDown=false;
 const writeHash=value=>{try{history.replaceState(history.state,'',location.pathname+location.search+value);}catch(_){}};
 function openModal(){
   if(modal.open)return;
   previousFocus=document.activeElement;
   root.classList.add('guidelines-open');
   modal.showModal();modal.scrollTop=0;
   if(location.hash!=='#guidelines')writeHash('#guidelines');
 }
 function finishClose(){
   clearTimeout(timer);if(!modal.open)return;
   modal.close();modal.classList.remove('is-closing');closing=false;
   root.classList.remove('guidelines-open');
   if(location.hash==='#guidelines')writeHash('');
   (previousFocus&&previousFocus!==document.body?previousFocus:trigger).focus({preventScroll:true});
 }
 function closeModal(){
   if(!modal.open||closing)return;
   if(reduced.matches){finishClose();return;}
   closing=true;modal.classList.add('is-closing');
   timer=setTimeout(finishClose,260);
 }
 trigger.addEventListener('click',openModal);
 modal.querySelectorAll('.guidelines-close,.guidelines-close-bottom').forEach(b=>b.addEventListener('click',closeModal));
 modal.addEventListener('cancel',e=>{e.preventDefault();closeModal();});
 const outside=e=>{const r=modal.getBoundingClientRect();return e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom;};
 modal.addEventListener('pointerdown',e=>{backdropDown=e.target===modal&&outside(e);});
 modal.addEventListener('click',e=>{if(backdropDown&&e.target===modal&&outside(e))closeModal();backdropDown=false;});
 modal.addEventListener('animationend',e=>{if(e.target===modal&&e.animationName==='guidelines-out'&&closing)finishClose();});
 window.addEventListener('hashchange',()=>{if(location.hash==='#guidelines')openModal();else if(modal.open)closeModal();});
 if(location.hash==='#guidelines')openModal();
})();
