import '../module/scrollAnimation.js';
import openMobileMenu from '../module/openMobileMenu.js';
import Dropdown from '../module/dropdown.js'
import Swiper from 'swiper/bundle';

console.log('bundle-course.js');


// TODO Preloader

window.addEventListener('load', function () {
   const preloader = document.getElementById('ui-preloader')
   preloader.classList.add('hide')
})




// TODO Mobile menu
const mobileMenu = new openMobileMenu({
   menu: '.mobile-menu-wrap',
   close: '.mobile-menu-wrap .ui-close',
   open: '.ui-burger',
   overlay: '.ui-overlay',
   closeItems: '.mobile-menu-list a',
})



// TODO Swiper Reviews
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





const footer = document.querySelector('footer')
const scrollWrap = document.querySelector('.scrollUp-wrap')

window.addEventListener('load', () => {
   fadeInNavOnScroll('.sticky', 200)
   footer.classList.contains('animation') ? scrollWrap.classList.add('up') : scrollWrap.classList.remove('up')
   
   window.addEventListener('scroll', () => {
      fadeInNavOnScroll('.sticky', 200)
      footer.classList.contains('animation') ? scrollWrap.classList.add('up') : scrollWrap.classList.remove('up')
   })
})

function fadeInNavOnScroll(elements, distance) {
   let items = document.querySelectorAll(elements)

   for (let i = 0; i < items.length; i++) {
      if (window.scrollY >= distance) 
         items[i].classList.add('active')
      
      if (window.scrollY <= 150)
         items[i].classList.remove('active')
   }
}





// TODO Открытие иконок с мессенджерами
const mesangers = document.querySelector('.messangers-wrap')
document.querySelector('.messangers-wrap').addEventListener('click', function () {
   document.querySelector('.scrollUp-arrow').classList.toggle('hide')
   this.classList.toggle('active')
})






// TODO Scroll Up
let scrollUpArrow = document.querySelector('.scrollUp-arrow')
scrollUpArrow.addEventListener('click', () => {
   window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
   });
})








// Создание dropdown в форме
const courseDropdownData = [
   { id: 1, value: '8 групповых занятий' },
   { id: 2, value: '4 групповых занятия' },
   { id: 3, value: 'Индивидуальное занятие: 30 минут' },
   { id: 4, value: 'Индивидуальное занятие: 45 минут' },
   { id: 5, value: 'Индивидуальное занятие: 60 минут' },
]

let courseDropdown = new Dropdown({
   dropdown: '.ui-dropdown',
   open: '.ui-dropdown .selected',
   data: courseDropdownData,
   selectedId: null
})