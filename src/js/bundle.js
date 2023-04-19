import './module/scrollAnimation.js';
import openMobileMenu from './module/openMobileMenu.js';
import openPopup from './module/openPopup.js';
import Validation from './module/validation.js';
import './module/sliders.js';



let validForm = new Validation(
   '#contact-form',
   '#contact-form [name=user_name]',
   '#contact-form [name=user_phone]',
   '#contact-form [name=user_email]',
   '#contact-form [name=user_message]'
)


 
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




// TODO Video popup
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



// TODO Schedule popup
const schedulePopup = new openPopup({
   popup: '#schedule-popup',
   open: '.schedule-items .schedule-item',
   close: '#schedule-popup .ui-close',
   overlay: '#schedule-popup .popup-overlay'
})



// TODO Price popup
const pricePopup = new openPopup({
   popup: '#price-popup',
   open: '.schedule-item.item-price',
   close: '#price-popup .ui-close',
   overlay: '#price-popup .popup-overlay'
})




// TODO Gallery popup
const galleryPopup = new openPopup({
   popup: '#gallery-popup',
   open: '.gallery .item',
   close: '#gallery-popup .ui-close',
   overlay: '#gallery-popup .popup-overlay'
})




// TODO Gallery popup
const coursesPopup = new openPopup({
   popup: '#course-popup',
   open: '.courses .more',
   close: '#course-popup .ui-close',
   overlay: '#course-popup .popup-overlay'
})




// TODO Создание Popup с расписаниями
const schedules = [
   {id: '0.9m-1.5y', age: '0.9 мес. - 2 года', img:'../../../img/optimized/schedule/0.9-1.5.webp',},
   {id: '1.5y-2y', age: '1.5 - 2 года', img:'../../../img/optimized/schedule/1.5-2.webp',},
   {id: '2y-3y', age: '2 - 3 года', img:'../../../img/optimized/schedule/2-3.webp',},
   {id: '3y-4y', age: '3 - 4 года', img:'../../../img/optimized/schedule/3-4.webp',},
   {id: '4y-5y', age: '4 - 5 лет', img:'../../../img/optimized/schedule/4-5.webp',},
   {id: '5y-6y', age: '5 - 6 лет', img:'../../../img/optimized/schedule/5-6.webp',},
   {id: '6y-7y', age: '6 - 7 лет', img:'../../../img/optimized/schedule/6-7.webp',},
   {id: '7y-8y', age: '7 - 8 лет', img:'../../../img/optimized/schedule/7-8.webp',},
   {id: '8y-9y', age: '8 - 9 лет', img:'../../../img/optimized/schedule/8-9.webp',},
   {id: '9y-11y', age: '9 - 11 лет', img:'../../../img/optimized/schedule/9-11.webp',},
   {id: '11y-13y', age: '11 - 13 лет', img:'../../../img/optimized/schedule/11-13.webp',},
   {id: '14+y', age: '14+', img:'../../../img/optimized/schedule/14+.webp',},
]
const scheduleAge = document.querySelector('.schedule-age')
const scheduleImage = document.querySelector('.schedule-body img')

document.querySelectorAll('.schedule-item').forEach(el => {
   el.addEventListener('click', function () {
      const btnAttr = this.getAttribute('data-age')

      if (btnAttr) {
         const {age, img} = schedules.find(el => el.id === btnAttr)
         scheduleAge.textContent = age
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






// TODO Создание контента для Course popup

const softSkillsContent = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">Важность гибких навыков</h4>
      <p class="detail-info-text">Чтобы быть успешными в будущем детям нужно научиться эффективно и гармонично выстраивать межличностное взаимодействие, т.е. развивать такие качества как: организованность, умение работать в команде, критическое мышление, креативность, дружелюбность, лидерские качества, умение решать сложные задачи и т.д.</p>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Курс состоит из 4 блоков:</h4>
      <ul class="detail-info-list check">
         <li>Самопрезентация</li>
         <li>Формирование дружеских отношений</li>
         <li>Создание договоренностей</li>
         <li>Работа в команде</li>
      </ul>
   </div>

   <div class="detail-info-item">
      <p class="detail-info-text">Мы начнем закладывать необходимую базу для развития этих гибких навыков. В каждом блоке 4 занятия по 50 минут, которые проводятся в игровой форме с обсуждениями. <strong>Занятия проходят 1 раз в неделю.</strong></p>
   </div>
`
const educationnalClassesContent = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">Полноценное развитие</h4>
      <p class="detail-info-text"><strong>На этом курсе с ребенком занимаются:</strong> сенсорным развитием, речевым развитием, познавательным развитием, художественно-эстетическим развитием, физическим развитием, развитием самостоятельности, ранней социализацией, гармонизацией детско-родительских отношений.</p>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Учимся играя</h4>
      <p class="detail-info-text"><strong>Занятие длится 45 минут и включает в себя:</strong> подвижные игры, развитие крупной моторики, пальчиковые игры, продуктивную деятельность, игры на развитие мелкой моторики, музыкальные игры, игры на развитие восприятия цвета, формы, размера, игры на развитие речи и пополнение пассивного и активного словаря ребёнка.</p>
   </div>
`
const tyapLyap = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">Творческие задания</h4>
      <p class="detail-info-text">Мы будем давать разные творческие задания: различные виды аппликации, доступные и разнообразные техники рисования, лепки + креативные техники. При этом малыши справляются с ними самостоятельно или с небольшой помощью мамы. Темы занятий просты и понятны детям.</p>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Игровой формат</h4>
      <p class="detail-info-text">Занятие в игровом формате с использованием сказок и рассказов, а также игрушек, с частой сменой деятельности.  Также обязательно включаем упражнения для развития мелкой моторики руки. Занятие длится 45 минут</p>
   </div>
`

const getCurrentContent = function (id) {
   switch (id) {
      case 1:
         return softSkillsContent;
      case 2:
         return educationnalClassesContent;
      case 3:
         return tyapLyap;
      default:
         return 'Ошибка в getCurrentContent, в конструкции switch'
   }
}

const coursesData = [
   { id: 1, title: 'Soft skills (гибкие навыки)', img: '../../../img/optimized/courses/soft-skills.webp', age: 'От 4 до 11 лет', price: 'От 4 400 рублей', duration: '50 минут', content: getCurrentContent(1) },
   { id: 2, title: 'Развивающие занятия', img: '../../../img/optimized/courses/educational-classes.webp', age: 'От 9 месяцев', price: 'От 5 400 рублей', duration: '45 минут', content: getCurrentContent(2) },
   { id: 3, title: 'Тяп-ляп - творческие занятия', img: '../../../img/optimized/courses/tyap.webp', age: 'От 9 мес до 3 лет', price: 'От 6 400 рублей', duration: '45 минут', content: getCurrentContent(3) },
]

const openCourseBtn = document.querySelectorAll('.courses .course .more')

// получаем id кликнутого курса
const getClickedCourseAttr = (element) => Number(element.getAttribute('data-id'))

// рендер контента в модальном окне
const renderCourseContent = (course) => {
   const courseDetailInfo = document.querySelector('#course-popup .detail-info')
   let courseImg = document.querySelector('#course-popup .course-popup-head img')
   let courseTitle = document.querySelector('.course-popup-title')
   let courseAge = document.querySelector('.short-info-item.age .value')
   let coursePrice = document.querySelector('.short-info-item.price .value')
   let courseDuration = document.querySelector('.short-info-item.duration .value')
   
   courseDetailInfo.insertAdjacentHTML('afterbegin', course.content)
   courseImg.src = course.img
   courseTitle.textContent = course.title
   courseAge.textContent = course.age
   coursePrice.textContent = course.price
   courseDuration.textContent = course.duration
}

const clearCourseConent = () => {
   const courseDetailInfo = document.querySelector('#course-popup .detail-info')
   const courseDetailInfoChilds = courseDetailInfo.querySelectorAll('.detail-info-item')

   for (let el of courseDetailInfoChilds) {
      courseDetailInfo.removeChild(el)
   }
}

openCourseBtn.forEach(el => {
   el.addEventListener('click', function () {
      clearCourseConent()
      let attr = getClickedCourseAttr(el)
      let currentCourse = coursesData.find(el => el.id === attr)

      renderCourseContent(currentCourse)
   })
})