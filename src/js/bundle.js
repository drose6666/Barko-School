
import './module/scrollAnimation.js';
import Swiper from 'swiper/bundle';


// TODO Preloader

window.addEventListener('load', function () {
   const preloader = document.getElementById('ui-preloader')
   preloader.classList.add('hide')

})


// TODO Swiper Courses
const courses = new Swiper('#courses-swiper', {
   slidesPerView: 4,
   slidesPerGroup: 1,
   loop: true,
   spaceBetween: 30,
   centeredSlides: true,
   speed: 800,
   // autoplay: {
   //    delay: 3000,
   //    disableOnInteraction: false,
   // },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
   },
   // breakpoints: {
   //    120: {
   //       slidesPerView: 1,
   //       slidesPerGroup: 1,
   //       spaceBetween: 30,
   //    },
   //    700: {
   //       slidesPerView: 2,
   //       spaceBetween: 30,
   //       slidesPerGroup: 1
   //    },
   //    1150: {
   //       slidesPerView: 3,
   //       spaceBetween: 40,
   //       slidesPerGroup: 1
   //    }
   // }
})