const sobre = document.querySelector("#sobre");
const recrutar = document.querySelector("#recrutar");
const sobreTab = document.querySelector(".tabMenu-about__table");
const recrutarTab = document.querySelector(".tabMenu-recrutar__table");
const recrutarTexto = document.querySelector(".recrutar-text-p")

sobre.addEventListener("click", function () {
  sobreTab.classList.add("selected");
  recrutarTab.classList.remove("selected");
  recrutarTexto.classList.add('hide')
});

recrutar.addEventListener("click", function () {
  recrutarTab.classList.add("selected");
  sobreTab.classList.remove("selected");
  recrutarTexto.classList.remove('hide')

});


//btn top
const btn = document.getElementById("btnTop");

btn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

document.addEventListener("scroll", ocultar);

function ocultar() {
  if (window.scrollY > 10) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
}

ocultar();

// tela de login
const createProductButton = document.querySelector("#create-product");
const dialog = document.querySelector(".create-product_dialog");

const openModal = () => dialog.showModal();

createProductButton.addEventListener("click", openModal);

const inputs = document.querySelectorAll("input");

const saveButton = document.querySelector("#save");

function logar() {
  const login = document.getElementById("login").value;
  const senha = document.getElementById("senha").value;
  const form = document.querySelector("form");
  form.reset();

  if (login == "admin" && senha == "admin") {
    alert("Login efetuado com sucesso!");
    createProductButton.textContent = "Sair";
  } else {
    alert("Usuário ou senha inválidas");
  }
}



// function AddSelected () {
//   if (classList === "tabMenu-recrutar__table") {
//     style.display = "block"
//   } else {
//     style.display = "none"
//   }
// }

// AddSelected ()



// const btn = document.getElementById("btnTop");

// btn.addEventListener("click", function () {
//   window.scrollTo(0, 0);
// });

// document.addEventListener("scroll", ocultar);

// function ocultar() {
//   if (window.scrollY > 10) {
//     btn.style.display = "flex";
//   } else {
//     btn.style.display = "none";
//   }
// }

// ocultar();
