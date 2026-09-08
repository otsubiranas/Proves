const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav-links');toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));document.getElementById('year').textContent=new Date().getFullYear();
const resourceSelect=document.getElementById('resource-subject');
const resourceCards=[...document.querySelectorAll('.resource-card')];
const resourcesEmpty=document.getElementById('resources-empty');

resourceSelect?.addEventListener('change',()=>{
  const subject=resourceSelect.value;
  let visible=0;
  resourceCards.forEach(card=>{
    const show=subject==='totes'||card.dataset.subject===subject;
    card.hidden=!show;
    if(show) visible++;
  });
  if(resourcesEmpty) resourcesEmpty.hidden=visible!==0;
});

