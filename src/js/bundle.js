import './module/scrollAnimation.js';
import openMobileMenu from './module/openMobileMenu.js';
import openPopup from './module/openPopup.js';
import './module/sliders.js';

// import Swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


 
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




// TODO Popup with video
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



// TODO Popup schedule
const schedulePopup = new openPopup({
   popup: '#schedule-popup',
   open: '.schedule-item',
   close: '#schedule-popup .ui-close',
   overlay: '#schedule-popup .popup-overlay'
})


// TODO Создание Popup с расписаниями
const schedules = [
   {id: '1.5y-2y', title: '1.5 - 2 года', img:'../../../img/optimized/schedule/schedule_1.5-2_years_1.5x.webp'},
   {id: '2y-3y', title: '2 - 3 года', img:'../../../img/optimized/about_img_450w.jpg'},
   {id: '3y-4y', title: '3 - 4 года', img:'../../../img/optimized/gallery/gallery_2.jpg'},
]
const scheduleAge = document.querySelector('.schedule-age')
const scheduleImage = document.querySelector('.schedule-body img')

document.querySelectorAll('.schedule-item').forEach(el => {
   el.addEventListener('click', function () {
      const btnAttr = this.getAttribute('data-age')
      const {title, img} = schedules.find(el => el.id === btnAttr)

      scheduleAge.textContent = title
      scheduleImage.src = img
   })
})



// TODO Создание Preview Галереи
const galleryPopup = new openPopup({
   popup: '#gallery-popup',
   open: '.gallery [class^="item"]',
   close: '#gallery-popup .ui-close',
   overlay: '#gallery-popup .popup-overlay'
})