// TODO Создание контента для Course popup

const softSkillsContent = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">Важность гибких навыков</h4>
      <p class="detail-info-text">Чтобы быть успешными в будущем детям нужно научиться эффективно и гармонично выстраивать межличностное взаимодействие, т.е. развивать такие качества как: организованность, умение работать в команде, критическое мышление, креативность, дружелюбность, лидерские качества, умение решать сложные задачи и т.д.</p>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Курс состоит из 4 блоков:</h4>
      <ul class="detail-info-list circle-fill">
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
const preparingForSchool = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">Изучение основных учебных навыков:</h4>
      <ul class="detail-info-list check">
         <li>Счету от 1 до 20 и обратно</li>
         <li>Сложению и вычитанию в пределах 10</li>
         <li>Составу числа в пределах 10</li>
         <li>Сравнению чисел первого десятка</li>
         <li>Решению задач в одно действие</li>
         <li>Рисованию простых фигур</li>
         <li>Чтению по слогам</li>
         <li>Классификации звуков</li>
         <li>Делению слова на слоги</li>
         <li>Постановке ударения</li>
         <li>Пересказу текста из 5-6 предложений</li>
         <li>Составлению коротких рассказов по картинкам</li>
      </ul>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Занятие состоит из 2-х блоков:</h4>
      <ul class="detail-info-list circle-fill">
         <li>Математика (45 минут)</li>
         <li>Русский язык (45 минут)</li>
      </ul>
   </div>

   <div class="detail-info-item">
      <p class="detail-info-text">Занятия будут проходить по вторникам, четвергам и пятницам <strong>в 14:30 и в 19:00.</strong> Длительность занятия составляет <strong>90 минут </strong>с перерывами между блоками</p>
      <p class="detail-info-text">За 8 недель мы научим Вашего реденка базовым умениям, которые понадобятся для хорошего старта в школьной программе. <strong>Занятия проходят 1 раз в неделю.</strong></p>
   </div>
`
const school = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">Усиленная программа</h4>
      <p class="detail-info-text">Развивающие занятия по обучению чтению и счету для дошкольников. Знакомство с буквами, чтением, счетом, письмом. Результат: освоение чтения простых слов и счета, правильный захват пишущего предмета. Сформированное эмоционально положительное отношение к занятиям , мотивация достижения - готовность переходить на следующую ступень.</p>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Формируются следующие умения:</h4>
      <ul class="detail-info-list circle-fill">
         <li>Взаимодействовать с группой и учителем</li>
         <li>Воспринимать информацию зрительно и на слух, понимать и выполнять поставленные задачи</li>
         <li>Следовать правилам поведения в "школьном" коллективе</li>
         <li>Отвечать на теор.вопросы по теме</li>
         <li>Выполнять практические задания по теме</li>
      </ul>
   </div>

   <div class="detail-info-item">
      <p class="detail-info-text">Занятия длятся по 50 минут и проходят два раза в неделю.</p>
   </div>
`
const speechTherapist = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">Индивидуальный подход</h4>
      <p class="detail-info-text">Выявление, диагностика и исправление различных дефектов речи у детей с 2х лет на индивидуальных занятиях от 30 минут. Продолжением этих занятий  является обучение чтению в индивидуальном формате.</p>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Консультация</h4>
      <p class="detail-info-text">Выявление нарушения, рекомендации по дальнейшему развитию и пути коррекции.</p>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Коррекция звукопроизношения</h4>
      <p class="detail-info-text">Исправление звуковых искажений и замен. Результат: Чистое звукопоизношение, правильно грамматически построенная речь, обширный лексический запас.</p>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Коррекция нарушения слоговой структуры слова</h4>
      <p class="detail-info-text">Когда переставляют слоги и съедают слова (велосипед - "сипед"). Рузельтат: снижение количества замен и перестановок слогов в речи.</p>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Логопедический массаж</h4>
      <p class="detail-info-text">Включается в структуру занятий по коррекции речи. Результат: нормализация мышечного тонуса артикуляционного аппарата.</p>
   </div>
`
const logorhythmics = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">Развиваем речь</h4>
      <p class="detail-info-text">Групповые занятия для  развития речи ребёнка с помощью игрового метода работы, в котором сочетаются музыка, движения, слова стихотворений и песенок.</p>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">В структуру занятия входят:</h4>
      <ul class="detail-info-list circle-fill">
         <li>Развитие связной диалоговой речи</li>
         <li>Расширение активного и пассивного словарей</li>
         <li>Артикуляционная гимнастика и слоговая структура слова</li>
         <li>Упражнения на развитие фонематического восприятия</li>
         <li>Игры на коммуникацию и социализацию</li>
         <li>Включение в речь ребёнка мимики и жестов</li>
         <li>Обучение плавности произношения слов</li>
         <li>Лексические темы и нейроигры</li>
      </ul>
   </div>
`
const draw = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">В нашей школе есть 3 направления:</h4>
      <ul class="detail-info-list circle-fill">
         <li><strong>ИЗО</strong> - рисование красками</li>
         <li><strong>Скетчинг</strong> - рисование фломастерами</li>
         <li><strong>ИЗО-лепка</strong> -	работа с глиной</li>
      </ul>
   </div>
`
const neurohymnastics = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">Фитнес для ума</h4>
      <p class="detail-info-text">Нейрогимнастика <strong>это фитнес для ума, а не для тела</strong>. Дети на занятиях двигаются, но не так активно как на спортивных занятиях, но  после нейрогимнастики владеть телом детям будет проще.</p>
      <p class="detail-info-text">Авторский комплекс упражнений для развития когнитивных способностей: памяти, внимания, воображения, речи, логики. Все это влияет на психоэмоциональные качества ребенка, его самооценку, способности к социализации.</p>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Игровая форма обучения</h4>
      <p class="detail-info-text">Занятия построены <strong>в игровой форме, а также в виде сказок</strong>, проходят в групповом формате и длятся <strong>45 минут</strong>. Также выделяется время ( ~ 10 мин) на общение с родителями сразу после занятия.</p>
   </div>
`
const chess = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">Упражнения ума</h4>
      <p class="detail-info-text">Шахматы это бесконечные упражнения для ума в игровой форме, которые развивают оба полушария головного мозга. Занятия проходят в групповом формате и длятся <strong>50 минут</strong>. Также можно заниматься индивидуально.</p>
   </div>
`
const psychology = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">Основные направления:</h4>
      <ul class="detail-info-list circle-fill">
         <li>Психологическая диагностика:
            <ul class="detail-info-list inside-list circle-border">
               <li>развития познавательных процессов (восприятие, внимание, память, мышление)</li>
               <li>эмоционально-волевой сферы (тревожность, агрессивность, фрустрированность и пр.)</li>
               <li>становления самосознания (самооценка)</li>
               <li>волевой и мотивационно-потребностной сферы (уровень самоконртроля и произвольности, уровень сформированности внутренней позиции школьника, выявление учебных мотивов, выявление отношения ребенка у определенным учебным предметам и к учению в целом и пр.)</li>
               <li>детско-родительских отношений</li>
               <li>готовности к школе</li>
               <li>адаптации к 1 классу</li>
               <li>определение уровня интеллекта</li>
            </ul>
         </li>
         <li>Психологическое просвещение</li>
         <li>Психологическая профилактика</li>
         <li>Психокоррекция - преодоление трудностей в психическом и личностном развитии</li>
         <li>Психокоррекция - преодоление трудностей в психическом и личностном развитии</li>
      </ul>
   </div>

   <div class="detail-info-item">
      <p class="detail-info-text">А также проводится психологическое консультирование родителей.</p>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Работа проводится в индивидуальном формате:</h4>
      <ul class="detail-info-list check">
         <li>С дошкольниками - <strong class="pl">30 минут</strong></li>
         <li>С младшими школьниками - <strong class="pl">45 минут</strong></li>
         <li>Со старшими школьниками - <strong class="pl">60 минут</strong></li>
      </ul>
   </div>
`
const skillsOfTheFuture = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">Строим фундамент</h4>
      <p class="detail-info-text">Летом у нас будет работать клуб «Навыки будущего», фокусом которого будет наш новый курс по гибким навыкам (софт скиллз). Мы уверены, чтобы быть успешными в будущем детям нужно научиться эффективно и гармонично выстраивать межличностное взаимодействие, т.е. развивать такие качества как: организованность, умение работать в команде, критическое мышление, креативность, дружелюбность, лидерские качества, умение решать сложные задачи и т.д.</p>
   </div>
`

// Определение необходимого контента
const getCurrentContent = function getCurrentContent (id) {
   switch (id) {
      case 1:
         return softSkillsContent;
      case 2:
         return educationnalClassesContent;
      case 3:
         return tyapLyap;
      case 4:
         return preparingForSchool;
      case 5:
         return school;
      case 6:
         return speechTherapist;
      case 7: 
         return logorhythmics;
      case 8: 
         return draw;
      case 9:
         return neurohymnastics;
      case 10:
         return chess;
      case 11:
         return psychology;
      case 12:
         return skillsOfTheFuture;
      default:
         return 'WARNING! Говнокод, в конструкции switch'
   }
}

// Данные о курсах
const coursesData = [
   { id: 1, title: 'Soft skills (гибкие навыки)', img: '../../../img/optimized/courses/soft-skills.webp', age: 'с 6 лет', priceTicket: '4000 рублей', priceIndividual: null, duration: '50 минут', content: getCurrentContent(1) },
   { id: 2, title: 'Развивающие занятия', img: '../../../img/optimized/courses/educational-classes.webp', age: 'с 9 месяцев', priceTicket: '4 400 - 6 800 рублей', priceIndividual: null, duration: '45 минут', content: getCurrentContent(2) },
   { id: 3, title: 'Тяп-ляп - творческие занятия', img: '../../../img/optimized/courses/tyap.webp', age: 'с 9 мес до 3 лет', priceTicket: '4 400 - 6 800 рублей', priceIndividual: null, duration: '45 минут', content: getCurrentContent(3) },
   { id: 4, title: 'Экспресс подготовка к школе', img: '../../../img/optimized/courses/preparing-for-school.webp', age: 'дошкольники', priceTicket: '5 300 рублей', priceIndividual: null, duration: '90 минут', content: getCurrentContent(4) },
   { id: 5, title: 'Подготовка к школе (в течение учебного года)', img: '../../../img/optimized/courses/school.webp', age: 'с 6-7 лет', priceTicket: '5 300 рублей', priceIndividual: null, duration: '50 минут', content: getCurrentContent(5) },
   { id: 6, title: 'Логопедические занятия', img: '../../../img/optimized/courses/speech-therapist.webp', age: 'с 2 лет', priceTicket: '3 600 - 7 200 рублей', priceIndividual: null, priceDiagnostics: '900 рублей', duration: '30 минут', content: getCurrentContent(6) },
   { id: 7, title: 'Логоритмика', img: '../../../img/optimized/courses/logorhythmics.webp', age: 'с 4 лет', priceTicket: '3 600 рублей', priceIndividual: null, duration: '50 минут', content: getCurrentContent(7) },
   { id: 8, title: 'ИЗО-студия - художественные занятия', img: '../../../img/optimized/courses/draw.webp', age: 'с 3 лет', priceTicket: '3 500 - 5 500 рублей', priceIndividual: '900 - 1 700 рублей', priceOneVisit: '900 рублей', duration: '30 - 60 минут', content: getCurrentContent(8) },
   { id: 9, title: 'Нейрогимнастика', img: '../../../img/optimized/courses/neurohymnastics.webp', age: 'с 3 лет', priceTicket: '4 400 - 6 800 рублей', priceIndividual: null, duration: '45 минут (~ 10 мин)', content: getCurrentContent(9) },
   { id: 10, title: 'Шахматы', img: '../../../img/optimized/courses/chess.webp', age: 'с 4 лет', priceTicket: '3 700 - 6 400 рублей', priceIndividual: '1700 рублей', duration: '50 минут', content: getCurrentContent(10) },
   { id: 11, title: 'Психолог', img: '../../../img/optimized/courses/psychology.webp', age: 'до 18 лет', priceTicket: 'от 8 000 рублей', priceIndividual: '', duration: 'От 30 минут', content: getCurrentContent(11) },
   { id: 12, title: 'Летний клуб «Навыки будущего»', img: '../../../img/optimized/courses/skills-future.webp', age: 'с 4 до 11 лет', priceTicket: 'от 7 000 рублей', priceIndividual: '', duration: 'Летний лагерь', content: getCurrentContent(12) },
]



const $openCourseBtn = document.querySelectorAll('.courses .course .more[data-id]')

// получаем id кликнутого курса
const getClickedCourseAttr = (element) => Number(element.getAttribute('data-id'))

// отображение опционального контента
const optionalContent = function (condition, elementHide, elementContent, content) {
   if (condition) {
      elementContent.textContent = content
      elementHide.style.display = 'grid'
   } else {
      elementHide.style.display = 'none'
   }
}

// рендер контента в модальном окне курса
const renderCourseContent = ({ title, img, age, priceTicket, priceIndividual, duration, content, ...other }) => {
   const $courseDetailInfo = document.querySelector('#course-popup .detail-info')
   const $coursePriceTicketItem = document.querySelector('.short-info-item.price-individual')
   const $coursePriceDiagnosticsItem = document.querySelector('.short-info-item.price-diagnostics')
   const $coursePriceOneVisitItem = document.querySelector('.short-info-item.price-one-visit')

   const $courseImg = document.querySelector('#course-popup .course-popup-head img')
   const $courseTitle = document.querySelector('.course-popup-title')
   const $courseAge = document.querySelector('.short-info-item.age .value')
   const $coursePriceTicket = document.querySelector('.short-info-item.price-ticket .value')
   const $coursePriceIndividual = document.querySelector('.short-info-item.price-individual .value')
   const $coursePriceDiagnostics = document.querySelector('.short-info-item.price-diagnostics .value')
   const $coursePriceOneVisit = document.querySelector('.short-info-item.price-one-visit .value')
   const $courseDuration = document.querySelector('.short-info-item.duration .value')
   
   $courseDetailInfo.insertAdjacentHTML('afterbegin', content)
   $courseImg.src = img
   $courseTitle.textContent = title
   $courseAge.textContent = age
   $coursePriceTicket.textContent = priceTicket
   $courseDuration.textContent = duration

   // отобрвжение опцинального контента
   optionalContent(priceIndividual, $coursePriceTicketItem, $coursePriceIndividual, priceIndividual)
   optionalContent(other.priceDiagnostics, $coursePriceDiagnosticsItem, $coursePriceDiagnostics, other.priceDiagnostics)
   optionalContent(other.priceOneVisit, $coursePriceOneVisitItem, $coursePriceOneVisit, other.priceOneVisit)

   // if (priceIndividual) {
   //    $coursePriceIndividual.textContent = priceIndividual
   //    $coursePriceTicketItem.style.display = 'grid'
   // } else {
   //    $coursePriceTicketItem.style.display = 'none'
   // }
}

// очищение контента модального окна курса
const clearCourseConent = () => {
   const $courseDetailInfo = document.querySelector('#course-popup .detail-info')
   const $courseDetailInfoChilds = $courseDetailInfo.querySelectorAll('.detail-info-item')

   for (let el of $courseDetailInfoChilds) {
      $courseDetailInfo.removeChild(el)
   }
}

// добавление контента в модальное окно курса при клике на кнопку
$openCourseBtn.forEach(el => {
   el.addEventListener('click', function () {
      clearCourseConent()
      let attr = getClickedCourseAttr(el)
      let currentCourse = coursesData.find(el => el.id === attr)

      renderCourseContent(currentCourse)
   })
})