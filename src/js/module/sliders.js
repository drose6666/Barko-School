import Swiper from 'swiper/bundle';





// TODO Swiper Courses
let courses = null;

const initSwiper = function () {
  if (window.innerWidth <= 730) {
    if (!courses) {
      courses = new Swiper('#swiper-courses', {
         slidesPerView: 'auto',
         slidesPerGroup: 1,
         loop: true,
         spaceBetween: 20,
         centeredSlides: true,
         speed: 400,
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
         }
      })
    }
  } else {
    if (courses) {
      courses.destroy();
      courses = null;
    }
  }
}

const collapseCourses = function (arr, count) {
   if (window.innerWidth <= 730) {
      arr.forEach(el => el.classList.remove('collapse'))
   } else {
      arr.forEach((el, idx) => {
         idx <= count && el.classList.add('collapse')
      })
   }
}

initSwiper();

const slides = [...document.querySelectorAll('.courses .swiper-slide')].reverse()
collapseCourses(slides, 6)

window.addEventListener('resize', function() {
  initSwiper();
  collapseCourses(slides, 6)
});


// TODO Отображение/скрытие всех курсов при клике на кнопку
const showBtn = document.querySelector('#courses .btn-all')
showBtn?.addEventListener('click', function () {
   const hasCollapse = slides.find(el => el.classList.contains('collapse'))

   if (hasCollapse) {
      slides.forEach(el => el.classList.remove('collapse'))
      this.textContent = 'Свернуть'
   }  else {
      slides.forEach((el, idx) => {
         idx <= 6 && el.classList.add('collapse')
      })
      this.textContent = 'Все курсы'
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
   navigation: {
      nextEl: ".reviews .swiper-button-next",
      prevEl: ".reviews .swiper-button-prev"
   },
   pagination: {
      el: '.reviews-pagination',
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




// TODO Gallery Swiper
const gallerySwiper = new Swiper('#gallery-swiper', {
   slidesPerView: 'auto',
   slidesPerGroup: 1,
   loop: true,
   spaceBetween: 20,
   centeredSlides: true,
   speed: 400,
   pauseOnMouseEnter: true,
   keyboard: {
      enabled: true,
      onlyInViewport: false,
   },
   navigation: {
      nextEl: ".gallery .swiper-button-next",
      prevEl: ".gallery .swiper-button-prev"
   },
   pagination: {
      el: '.gallery-pagination',
      clickable: true,
      type: 'bullets',
      dynamicBullets: true
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





// TODO Swiper Gallery popup
const galleryPopupSwiper = new Swiper('#gallery-preview-swiper', {
   slidesPerView: 'auto',
   slidesPerGroup: 1,
   loop: true,
   speed: 400,
   spaceBetween: 20,
   keyboard: {
      enabled: true,
      onlyInViewport: false,
   },
   navigation: {
      nextEl: ".gallery-preview .swiper-button-next",
      prevEl: ".gallery-preview .swiper-button-prev"
   },
   // autoHeight: true
})

const galleryItems = document.querySelectorAll('.gallery .item')
const galleryPreviewSlider = document.querySelectorAll('#gallery-preview-swiper img')

galleryItems.forEach(el => {
   el.addEventListener('click', function () {
      const currentImage = this.getAttribute('data-img-preview')
      const getActiveSlide = [...galleryPreviewSlider].findIndex(item => item.getAttribute('src') === currentImage)
      galleryPopupSwiper.slideTo(getActiveSlide);
   })
})

