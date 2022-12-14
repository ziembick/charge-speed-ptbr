const selected = document.querySelectorAll('#selected')
const classesVai = document.querySelector('.section-container__list');
const classeVem = document.querySelector('.section-container__categorias-solo')
const teste1 = document.querySelector('#tab1')
const teste2 = document.querySelector('#tab2')
const teste3 = document.querySelector('#tab3')
const testando = document.querySelector('.section-container__categorias-solo')
const testando2 = document.querySelector('.section-container__categorias-solo2')
const testando3 = document.querySelector('.section-container__categorias-solo3')




teste1.addEventListener('click', function() {
  testando.classList.add('selected')
})

teste2.addEventListener('click', function (){
  testando2.classList.add('selected')
})






let slide = document.getElementById("slide");
let images = [
   "img/body-pic__slide-1.jpg",
   "img/body-pic__slide-2.jpg",
   "img/body-pic__slide-3.jpg",
];
 let i = 0;
 max = images.length


 function slideShow () {
   slide.src = images[i];

  if (i < images.length - 1) {
    i++
  }  

   setTimeout(slideShow, 900)
 }

 slideShow()




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
