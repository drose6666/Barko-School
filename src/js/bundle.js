import './module/scrollAnimation.js';
import openMobileMenu from './module/openMobileMenu.js';
import openPopup from './module/openPopup.js';
import Validation from './module/validation.js';
import './module/sliders.js';


let validForm = new Validation(
   '#contact-form',
   '#contact-form [name=user_name]',
   null,
   '#contact-form [name=user_phone]',
   '#contact-form [name=user_email]',
   '#contact-form [name=user_message]'
)


 
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



// TODO Gallery popup
const galleryPopup = new openPopup({
   popup: '#gallery-popup',
   open: '.gallery [class^="item"]',
   close: '#gallery-popup .ui-close',
   overlay: '#gallery-popup .popup-overlay'
})




// TODO Создание Popup с расписаниями
const schedules = [
   {id: '0.9m-1.5y', title: '0.9 мес. - 2 года', img:'../../../img/optimized/schedule/0.9-1.5.webp'},
   {id: '1.5y-2y', title: '1.5 - 2 года', img:'../../../img/optimized/schedule/1.5-2.webp'},
   {id: '2y-3y', title: '2 - 3 года', img:'../../../img/optimized/schedule/2-3.webp'},
   {id: '3y-4y', title: '3 - 4 года', img:'../../../img/optimized/schedule/3-4.webp'},
   {id: '4y-5y', title: '4 - 5 лет', img:'../../../img/optimized/schedule/4-5.webp'},
   {id: '5y-6y', title: '5 - 6 лет', img:'../../../img/optimized/schedule/5-6.webp'},
   {id: '6y-7y', title: '6 - 7 лет', img:'../../../img/optimized/schedule/6-7.webp'},
   {id: '7y-8y', title: '7 - 8 лет', img:'../../../img/optimized/schedule/7-8.webp'},
   {id: '8y-9y', title: '8 - 9 лет', img:'../../../img/optimized/schedule/8-9.webp'},
   {id: '9y-11y', title: '9 - 11 лет', img:'../../../img/optimized/schedule/9-11.webp'},
   {id: '11y-13y', title: '11 - 13 лет', img:'../../../img/optimized/schedule/11-13.webp'},
   {id: '14+y', title: '14+', img:'../../../img/optimized/schedule/14+.webp'},
]
const scheduleAge = document.querySelector('.schedule-age')
const scheduleImage = document.querySelector('.schedule-body img')

document.querySelectorAll('.schedule-item').forEach(el => {
   el.addEventListener('click', function () {
      const btnAttr = this.getAttribute('data-age')

      if (btnAttr) {
         const {title, img} = schedules.find(el => el.id === btnAttr)
         scheduleAge.textContent = title
         scheduleImage.src = img
      } else {
         scheduleAge.textContent = ''
         scheduleImage.src = ''
      }
   })
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

function changePosScrollWrap () {
  
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



