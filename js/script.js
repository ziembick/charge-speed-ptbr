//seleções de tabs
const tab1 = document.querySelector("#tab1");
const tab2 = document.querySelector("#tab2");
const tab3 = document.querySelector("#tab3");
const solo = document.querySelector(".section-container__categorias-solo");
const solo2 = document.querySelector(".section-container__categorias-solo2");
const solo3 = document.querySelector(".section-container__categorias-solo3");

tab1.addEventListener("click", function () {
  solo.classList.add("selected");
  solo2.classList.remove("selected");
  solo3.classList.remove("selected");
});

tab2.addEventListener("click", function () {
  solo2.classList.add("selected");
  solo.classList.remove("selected");
  solo3.classList.remove("selected");
});

tab3.addEventListener("click", function () {
  solo3.classList.add("selected");
  solo2.classList.remove("selected");
  solo.classList.remove("selected");
});

//slides de imagens

let slide = document.getElementById("slide");
let images = [
  "img/body-pic__slide-1.jpg",
  "img/body-pic__slide-2.jpg",
  "img/body-pic__slide-3.jpg",
];
let i = 0;
max = images.length;

function slideShow() {
  slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  }

  setTimeout(slideShow, 900);
}

slideShow();

//login-btn
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

//peças modal
const createPecasAero = document.querySelector('#pecas-aerodinamicas')
const dialog2 = document.querySelector('.modal-pecas__dialog')

const abrirModal = () => dialog2.showModal()

createPecasAero.addEventListener('click', abrirModal)

//exaustores modal

const createExaustao = document.querySelector('#exaustores')
const dialog3 = document.querySelector('#dialog-exaus')

const abrirModal2 = () => dialog3.showModal();

createExaustao.addEventListener('click',abrirModal2)

//outros modal
const createOutros = document.querySelector('#outros')
const dialog4 = document.querySelector('#dialog-outros')

const abrirModal3 = () => dialog4.showModal()

createOutros.addEventListener('click', abrirModal3)



//btn top
const btn = document.getElementById('btnTop')

btn.addEventListener('click', function(){
  window.scrollTo(0,0)
})

document.addEventListener('scroll', ocultar)


function ocultar () {
  if(window.scrollY > 10){
    btn.style.display = "flex"
  } else {
    btn.style.display = "none"
  }
}

ocultar()


// let time = 1500,
//   currentImageIndex = 0,
//   images = document.querySelectorAll("#slider img");
//    max = images.length;

//  function nextImage() {

//    currentImageIndex++

//    if(currentImageIndex == max) {
//      currentImageIndex = 0
//    }

//   images[currentImageIndex].classList.add('selected')

//  }

//  function start() {
//    setInterval(() => {
//      nextImage ()
//    }, time);
//  }

//  window.addEventListener("load", start);
