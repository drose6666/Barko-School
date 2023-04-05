
import './module/scrollAnimation.js';
import Swiper from 'swiper/bundle';


// TODO Preloader

window.addEventListener('load', function () {
   const preloader = document.getElementById('ui-preloader')
   preloader.classList.add('hide')
})

document.querySelectorAll('.swiper-arrows .arrow').forEach(el => {
   el.addEventListener('click', function (e) {
      e.preventDefault()
   })
})

// TODO Swiper Courses
const courses = new Swiper('#courses-swiper', {
   slidesPerView: 'auto',
   slidesPerGroup: 1,
   loop: true,
   spaceBetween: 20,
   centeredSlides: true,
   speed: 400,
   // autoplay: {
   //    delay: 2500,
   //    // disableOnInteraction: false,
   // },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
   },
   breakpoints: {
      120: {
         slidesPerView: 1,
         slidesPerGroup: 1,
         spaceBetween: 20,
         centeredSlides: true,
      },
      550: {
         spaceBetween: 20,
         slidesPerGroup: 1,
         centeredSlides: true,
         slidesPerView: 'auto',
      },
      800: {
         spaceBetween: 20,
         slidesPerGroup: 1,
         centeredSlides: true,
         slidesPerView: 'auto',
      },

   }
})