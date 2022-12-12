const changeClass = document.querySelector(".section-container__categorias-solo");
const selected = document.querySelectorAll('#selected')

const classesVai = document.querySelector('.section-container__list');

classesVai.addEventListener('click', function() {
  console.log('olaola')
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
