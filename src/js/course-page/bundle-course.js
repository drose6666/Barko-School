import '../module/scrollAnimation.js';
import openMobileMenu from '../module/openMobileMenu.js';
import Dropdown from '../module/dropdown.js'
import '../module/sliders.js';

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

const courseDropdown = new Dropdown({
   selector: '.ui-dropdown',
   open: '.ui-dropdown .selected',
   close: '.ui-dropdown .option',
   data: courseDropdownData
})