import './module/scrollAnimation.js';
import openMobileMenu from './module/openMobileMenu.js';
import openPopup from './module/openPopup.js';

// import Swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

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



// TODO Mobile menu
const mobileMenu = new openMobileMenu({
   menu: '.mobile-menu-wrap',
   close: '.mobile-menu-wrap .ui-close',
   open: '.ui-burger',
   overlay: '.ui-overlay',
   closeItems: '.mobile-menu-list a',
})



// TODO Swiper Courses
const courses = new Swiper('#swiper-courses', {
   // modules: [Navigation],
   slidesPerView: 'auto',
   slidesPerGroup: 1,
   loop: true,
   spaceBetween: 20,
   centeredSlides: true,
   speed: 400,
   autoplay: {
      delay: 2500,
      // disableOnInteraction: false,
   },
   keyboard: {
      enabled: true,
      onlyInViewport: false,
   },
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



// TODO Swiprr Reviews
const reviews = new Swiper('#swiper-reviews', {
   // modules: [Pagination],
   slidesPerView: 1,
   slidesPerGroup: 1,
   loop: true,
   speed: 400,
   spaceBetween: 20,
   // autoplay: {
   //    delay: 2500,
   //    // disableOnInteraction: false,
   // },
   keyboard: {
      enabled: true,
      onlyInViewport: false,
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
      dynamicBullets: true
   },
   effect: 'fade',
   fadeEffect: {
      crossFade: true
   },
   autoHeight: true
})



// TODO Popup with video


window.addEventListener('load', function () {
   const aboutVideo = `<iframe width="560" height="315" src="https://www.youtube.com/embed/LlCwHnp3kL4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`

   const options = {
      popup: '#video-popup',
      open: '.about-video-open',
      close: '#video-popup .ui-close',
      overlay: '#video-popup .popup-overlay',
      whereInsert: '#about-video',
      frame: aboutVideo
   }

   new openPopup(options)
})


