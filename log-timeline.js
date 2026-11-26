
(()=>{
 const list=document.getElementById('log-timeline'),filters=document.querySelector('.log-filters'),buttons=[...filters.querySelectorAll('button')],dot=filters.querySelector('.log-filter-dot');
 let selected=buttons[0], pointed=null;
 const lang=()=>window.NulllatteI18n?.language||'ja';
 function position(b){const r=b.getBoundingClientRect(),p=filters.getBoundingClientRect();dot.style.setProperty('--x',`${r.left-p.left+(r.width-7)/2}px`);dot.style.setProperty('--y',`${r.bottom-p.top-5}px`);}
 function make(tag,cls,text){const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;}
 function render(){
   list.replaceChildren();let currentMonth='', currentDate='', month,entries;
   const items=getSortedPosts().filter(p=>selected.dataset.filter==='all'||p.category===selected.dataset.filter);
   for(const post of items){const [y,m,d]=post.date.split('-'),key=`${y}-${m}`;
     if(key!==currentMonth){currentMonth=key;currentDate='';month=make('section','log-month');const title=make('h2','log-month-title',`${y} / ${m}`);month.append(title);list.append(month);}
     if(post.date!==currentDate){currentDate=post.date;const day=make('section','log-day');const time=make('time','log-day-number',d);time.dateTime=post.date;time.setAttribute('aria-label',post.date);entries=make('ul','log-entries');day.append(time,entries);month.append(day);}
     const item=make('li','log-entry');item.dataset.category=post.category;const cat=make('span','log-category',post.category.toUpperCase());const h=make('h3');const title=lang()==='en'?(post.titleEn||window.NulllatteI18n.t(post.title)):post.title;
     const label=make(post.url?'a':'span',post.url?'':'no-link',title);if(post.url)label.href=post.url;
     h.append(label);item.append(cat,h);entries.append(item);
   }
   buttons[0].textContent=lang()==='en'?'ALL':'すべて';position(pointed||selected);
 }
 for(const b of buttons){b.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'){pointed=b;position(b);}});b.addEventListener('focus',()=>position(b));b.addEventListener('blur',()=>position(pointed||selected));b.addEventListener('click',()=>{selected=b;buttons.forEach(x=>x.setAttribute('aria-pressed',String(x===b)));render();});}
 filters.addEventListener('pointerleave',()=>{pointed=null;position(selected);});
 window.addEventListener('nulllatte:languagechange',render);window.addEventListener('resize',()=>position(pointed||selected));
 if(document.fonts)document.fonts.ready.then(()=>position(pointed||selected));
 render();requestAnimationFrame(()=>dot.classList.add('ready'));
})();
