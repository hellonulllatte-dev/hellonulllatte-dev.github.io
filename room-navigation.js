(()=>{
 const tab=document.querySelector('.room-tab');if(!tab)return;
 const root=document.documentElement,cast=root.classList.contains('cast-room');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 try{const raw=sessionStorage.getItem('nl-room-arrival');sessionStorage.removeItem('nl-room-arrival');if(raw){const data=JSON.parse(raw);if(data.path===location.pathname&&Date.now()-data.time<10000&&!reduced.matches)root.classList.add(data.from==='games'?'room-from-games':'room-from-cast');}}catch(_){}
 const curtain=document.createElement('div');curtain.className='room-curtain';curtain.setAttribute('aria-hidden','true');document.body.append(curtain);
 let busy=false,timer;
 tab.addEventListener('click',e=>{if(e.defaultPrevented||e.button!==0||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;
 e.preventDefault();if(busy)return;if(reduced.matches){location.href=tab.href;return;}
 busy=true;curtain.style.background=cast?'#ded0c7':'#6b5258';curtain.style.transformOrigin=cast?'left center':'right center';curtain.classList.add('wipe');
 timer=setTimeout(()=>{try{sessionStorage.setItem('nl-room-arrival',JSON.stringify({path:new URL(tab.href).pathname,from:cast?'cast':'games',time:Date.now()}));}catch(_){}location.href=tab.href;},290);
 });
 window.addEventListener('pageshow',e=>{if(e.persisted){clearTimeout(timer);busy=false;curtain.classList.remove('wipe');root.classList.remove('room-from-games','room-from-cast');}});
 const filter=document.querySelector('.cast-filters');if(!filter)return;
 const buttons=[...filter.querySelectorAll('button')],dot=document.createElement('span');dot.className='filter-dot';dot.setAttribute('aria-hidden','true');filter.append(dot);let preview=null;
 const selected=()=>buttons.find(b=>b.classList.contains('active'))||buttons[0];
 function update(){const active=selected();buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===active)));const a=(preview||active).getBoundingClientRect(),r=filter.getBoundingClientRect();dot.style.setProperty('--filter-x',`${a.left-r.left+a.width/2-dot.offsetWidth/2}px`);dot.style.setProperty('--filter-y',`${a.bottom-r.top-5}px`);}
 for(const b of buttons){b.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch'){preview=b;update()}});b.addEventListener('click',()=>{preview=null;update()});b.addEventListener('focus',()=>{if(b.matches(':focus-visible')){preview=b;update()}});b.addEventListener('blur',()=>{if(preview===b){preview=null;update()}})}
 filter.addEventListener('pointerleave',()=>{preview=null;update()});window.addEventListener('resize',update);window.addEventListener('nulllatte:languagechange',()=>requestAnimationFrame(update));if(document.fonts)document.fonts.ready.then(update);if('ResizeObserver' in window){const ro=new ResizeObserver(update);ro.observe(filter);buttons.forEach(b=>ro.observe(b));}update();requestAnimationFrame(()=>{update();dot.classList.add('ready')});
})();
