const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav-links');toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));document.getElementById('year')?.textContent=new Date().getFullYear();

/* Filtre de la biblioteca de recursos */
const resourceFilter=document.querySelector('#resource-subject');
const resourceCards=[...document.querySelectorAll('.resource-card')];
const resourceEmpty=document.querySelector('.resource-empty');

function filterResources(){
  if(!resourceFilter || !resourceCards.length) return;
  const subject=resourceFilter.value;
  let visible=0;
  resourceCards.forEach(card=>{
    const show=subject==='totes' || card.dataset.subject===subject;
    card.hidden=!show;
    if(show) visible++;
  });
  if(resourceEmpty) resourceEmpty.hidden=visible!==0;
}
resourceFilter?.addEventListener('change',filterResources);
filterResources();
