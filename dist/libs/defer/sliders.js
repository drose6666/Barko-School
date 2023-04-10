import Swiper from 'swiper/bundle';

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
