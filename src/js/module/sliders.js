import Swiper from 'swiper/bundle';





// TODO Swiper Courses
const courses = new Swiper('#swiper-courses', {
   slidesPerView: 'auto',
   slidesPerGroup: 1,
   loop: true,
   spaceBetween: 20,
   centeredSlides: true,
   speed: 400,
   // autoplay: {
   //    delay: 2500,
   //    disableOnInteraction: true,
   // },
   pauseOnMouseEnter: true,
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
   slidesPerView: 1,
   slidesPerGroup: 1,
   loop: true,
   speed: 400,
   spaceBetween: 20,
   // autoplay: {
   //    delay: 2500,
   //    disableOnInteraction: true
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




// TODO Swiper Gallery popup
const galleryPopupSwiper = new Swiper('#gallery-preview-swiper', {
   slidesPerView: 1,
   slidesPerGroup: 1,
   loop: true,
   speed: 400,
   spaceBetween: 20,
   keyboard: {
      enabled: true,
      onlyInViewport: false,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
   },
   // autoHeight: true
})

const galleryItems = document.querySelectorAll('.gallery [class^="item"]')
const galleryPreviewSlider = document.querySelectorAll('#gallery-preview-swiper img')

galleryItems.forEach(el => {
   el.addEventListener('click', function () {
      const currentImage = this.getAttribute('data-img-preview')
      const getActiveSlide = [...galleryPreviewSlider].findIndex(item => item.getAttribute('src') === currentImage)
      galleryPopupSwiper.slideTo(getActiveSlide);
   })
})

