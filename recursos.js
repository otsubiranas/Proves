
const filter = document.querySelector("#resource-subject");
const cards = [...document.querySelectorAll(".resource-card")];
const empty = document.querySelector(".resource-empty");

function filterResources(){
  if(!filter) return;
  const value = filter.value;
  let visible = 0;
  cards.forEach(card=>{
    const show = value === "totes" || card.dataset.subject === value;
    card.hidden = !show;
    if(show) visible++;
  });
  if(empty) empty.style.display = visible ? "none" : "block";
}

filter?.addEventListener("change", filterResources);
filterResources();

const year = document.querySelector("#resource-year");
if(year) year.textContent = new Date().getFullYear();
