import Swiper from 'swiper/bundle';





// TODO Swiper Courses
let coursesOnline = null;
let coursesOffline = null;

const initSwiperOffine = function () {
  if (window.innerWidth <= 730) {
    if (!coursesOffline) {
      coursesOffline = new Swiper('#swiper-courses-offline', {
         slidesPerView: 'auto',
         slidesPerGroup: 1,
         loop: true,
         spaceBetween: 20,
         centeredSlides: true,
         speed: 400,
         pauseOnMouseEnter: true,
         observer: true,
         keyboard: {
            enabled: true,
            onlyInViewport: false,
         },
         navigation: {
            nextEl: ".courses-offline .swiper-button-next",
            prevEl: ".courses-offline .swiper-button-prev"
         },
         pagination: {
            el: '.courses-pagination-offline',
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
               observer: true,
            },
            550: {
               spaceBetween: 20,
               slidesPerGroup: 1,
               centeredSlides: true,
               slidesPerView: 'auto',
               observer: true,
            },
         }
      })
    }
  } else {
    if (coursesOffline) {
      console.log('destroy');
      coursesOffline.destroy();
      coursesOffline = null;
    }
  }
}

const initSwiperOnline = function () {
   if (window.innerWidth <= 730) {
     if (!coursesOnline) {
      coursesOnline = new Swiper('#swiper-courses-online', {
          slidesPerView: 'auto',
          slidesPerGroup: 1,
          loop: true,
          spaceBetween: 20,
          centeredSlides: true,
          speed: 400,
          pauseOnMouseEnter: true,
          observer: true,
          keyboard: {
             enabled: true,
             onlyInViewport: false,
          },
          navigation: {
             nextEl: ".courses-online .swiper-button-next",
             prevEl: ".courses-online .swiper-button-prev"
          },
          pagination: {
             el: '.courses-pagination-online',
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
                observer: true,
             },
             550: {
                spaceBetween: 20,
                slidesPerGroup: 1,
                centeredSlides: true,
                slidesPerView: 'auto',
                observer: true,
             },
          }
       })
     }
   } else {
     if (coursesOnline) {
      coursesOnline.destroy();
      coursesOnline = null;
     }
   }
 }


 // Вкладки в courses section

const coursesTabs = document.querySelectorAll('#courses .tab')
const coursesContent = document.querySelectorAll('#courses .courses')



coursesTabs.forEach((tab, index) => {
   tab.addEventListener('click', function (e) {
      for (let i = 0; i < coursesTabs.length; i++) {
         coursesTabs[i].classList.remove('active')
      }
      tab.classList.add('active')

      coursesContent.forEach((course, idx) => {
         course.classList.remove('active')

         if (index === idx) {
            tab.classList.add('active')
            course.classList.add('active')
         }
      })
   })
})


// const collapseCourses = function (arr, count) {
//    if (window.innerWidth <= 730) {
//       arr.forEach(el => el.classList.remove('collapse'))
//    } else {
//       arr.forEach((el, idx) => {
//          console.log(count, idx);
//          idx <= count && el.classList.add('collapse')
//       })
//    }
// }

initSwiperOnline();
initSwiperOffine()

// const slides = [...document.querySelectorAll('.courses .swiper-slide')].reverse()
// collapseCourses(slides, 4)

window.addEventListener('resize', function() {
   initSwiperOnline();
   initSwiperOffine()
//   collapseCourses(slides, 4)
});


// TODO Отображение/скрытие всех курсов при клике на кнопку
const showBtn = document.querySelector('#courses .btn-all')

showBtn?.addEventListener('click', function () {
   const hasCollapse = slides.find(el => el.classList.contains('collapse'))

   if (hasCollapse) {
      slides.forEach(el => el.classList.remove('collapse'))
      this.textContent = 'Свернуть'
   } else {
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

