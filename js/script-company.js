const sobre = document.querySelector("#sobre");
const recrutar = document.querySelector("#recrutar");
const sobreTab = document.querySelector(".tabMenu-about__table");
const recrutarTab = document.querySelector(".tabMenu-recrutar__table");

sobre.addEventListener("click", function () {
  sobreTab.classList.add("selected");
  recrutarTab.classList.remove("selected");
});

recrutar.addEventListener("click", function () {
  recrutarTab.classList.add("selected");
  sobreTab.classList.remove("selected");
});
