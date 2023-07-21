// TODO Создание контента для Course popup

const english = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">Строим фундамент</h4>
      <p class="detail-info-text">Наши занятия строятся по Кембриджской программе. Они направлены в первую очередь на расширение словарного запаса и развитие разговорной речи, развитие умения понимать английскую речь на слух, а также на изучение грамматики. Занятия разработаны как для взрослых, так и для детей! <strong>Занятия разработаны как для взрослых, так и для детей!</strong></p>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Варианты обучения:</h4>
      <ul class="detail-info-list check">
         <li>Без/с использования(ем) русского языка</li>
         <li>Онлайн/оффлайн</li>
         <li>Индивидуально/в группе</li>
      </ul>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Для детей от 2-х до 5-ти лет:</h4>
      <ul class="detail-info-list check">
         <li>Занятия проходят в игровой форме для лучшего понимания и запоминания новой информации</li>
      </ul>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Для детей от 6-ти лет:</h4>
      <ul class="detail-info-list check">
         <li>Подготовка к егэ и огэ</li>
         <li>Подготовка к олимпиадам/конкурсам</li>
         <li>Разговорный анлийский</li>
      </ul>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Для взрослых:</h4>
      <ul class="detail-info-list check">
         <li>Анлийский для путешествий;</li>
         <li>Разговорный анлийский</li>
         <li>Деловой анлийский</li>
      </ul>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Мы поможем Вам</h4>
      <p class="detail-info-text">Погрузиться в языковую среду и побороть страх сказать что-то не то и начать говорить по-Английски. А также полностью понимать речь носителей языка и вести с ним диалог.</p>
   </div>

   <div class="detail-info-item">
      <p class="detail-info-text">Записывайтесь на пробное <strong>БЕСПЛАТНОЕ</strong> занятие. Это ни к чему не обязывает!</p>
   </div>
`

const french = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">Строим фундамент</h4>
      <p class="detail-info-text">Занятия направлены в первую очередь на расширение словарного запаса и развитие разговорной речи, развитие умения понимать французскую речь на слух, а также на изучение грамматики. <strong>Занятия разработаны как для взрослых, так и для детей!</strong></p>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Варианты обучения:</h4>
      <ul class="detail-info-list check">
         <li>Без/с использования(ем) русского языка</li>
         <li>Онлайн</li>
         <li>Индивидуально/в группе</li>
      </ul>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Для детей от 2-х до 5-ти лет:</h4>
      <ul class="detail-info-list check">
         <li>Занятия проходят в игровой форме для лучшего понимания и запоминания новой информации</li>
      </ul>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Для детей от 6-ти лет:</h4>
      <ul class="detail-info-list check">
         <li>Подготовка к егэ и огэ</li>
         <li>Подготовка к олимпиадам/конкурсам</li>
         <li>Разговорный французский</li>
      </ul>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Для взрослых:</h4>
      <ul class="detail-info-list check">
         <li>Французский для путешествий;</li>
         <li>Разговорный французский</li>
         <li>Деловой французский</li>
      </ul>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Мы поможем Вам</h4>
      <p class="detail-info-text">Погрузиться в языковую среду и побороть страх сказать что-то не то и начать говорить по-Французски. А также полностью понимать речь носителей языка и вести с ним диалог.</p>
   </div>

   <div class="detail-info-item">
      <p class="detail-info-text">Записывайтесь на пробное <strong>БЕСПЛАТНОЕ</strong> занятие. Это ни к чему не обязывает!</p>
   </div>
`

const spanish = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">Строим фундамент</h4>
      <p class="detail-info-text">Занятия направлены в первую очередь на расширение словарного запаса и развитие разговорной речи, развитие умения понимать испанскую речь на слух, а также на изучение грамматики. <strong>Занятия разработаны как для взрослых, так и для детей!</strong></p>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Варианты обучения:</h4>
      <ul class="detail-info-list check">
         <li>Без/с использования(ем) русского языка</li>
         <li>Онлайн</li>
         <li>Индивидуально/в группе</li>
      </ul>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Для детей от 2-х до 5-ти лет:</h4>
      <ul class="detail-info-list check">
         <li>Занятия проходят в игровой форме для лучшего понимания и запоминания новой информации</li>
      </ul>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Для детей от 6-ти лет:</h4>
      <ul class="detail-info-list check">
         <li>Подготовка к егэ и огэ</li>
         <li>Подготовка к олимпиадам/конкурсам</li>
         <li>Разговорный испанский</li>
      </ul>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Для взрослых:</h4>
      <ul class="detail-info-list check">
         <li>Испанский для путешествий;</li>
         <li>Разговорный испанский</li>
         <li>Деловой испанский</li>
      </ul>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Мы поможем Вам</h4>
      <p class="detail-info-text">Погрузиться в языковую среду и побороть страх сказать что-то не то и начать говорить по-Испански. А также полностью понимать речь носителей языка и вести с ним диалог.</p>
   </div>

   <div class="detail-info-item">
      <p class="detail-info-text">Записывайтесь на пробное <strong>БЕСПЛАТНОЕ</strong> занятие. Это ни к чему не обязывает!</p>
   </div>
`

const softSkillsContent = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">Важность гибких навыков</h4>
      <p class="detail-info-text">Soft skills (гибкие навыки) —Это умение организовывать командную работу, креативность, способность учиться и адаптироваться к изменениям, мыслить нестандартно, общаться, грамотно распределять время.</p>
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
      <p class="detail-info-text">Записывайтесь на пробное <strong>БЕСПЛАТНОЕ</strong> занятие. Это ни к чему не обязывает!</p>
   </div>
`

const neurohymnastics = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">Фитнес для ума</h4>
      <p class="detail-info-text">Нейрогимнастика в Barco School – это Авторский комплекс упражнений для развития когнитивных способностей: памяти, внимания, воображения, речи, логики. Все это влияет на психоэмоциональные качества ребенка, его самооценку, способности к социализации.</p>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Кому и зачем нужна нейрогимнастика?</h4>
      <p class="detail-info-text">Нейрогимнастика полезна всем, но в большей степени дошкольникам и детям, у кого плохая концентрация внимания, гиперактивность, задержки в речи и развитии, плохая обучаемость, нежелание учиться, неуверенность в своих силах.</p>
   </div>

   <div class="detail-info-item">
      <p class="detail-info-text">Записывайтесь на пробное <strong>БЕСПЛАТНОЕ</strong> занятие. Это ни к чему не обязывает!</p>
   </div>
`

const school = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">На занятиях в Barko school Ваш ребенок научится:</h4>
      <ul class="detail-info-list circle-fill">
         <li>Быстро и правильно читать</li>
         <li>Грамотно писать</li>
         <li>Освоит необходимые азы математики</li>
      </ul>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Результат</h4>
      <p class="detail-info-text">Ребенок с радостью и без страха пойдет в первый класс!</p>
   </div>

   <div class="detail-info-item">
      <p class="detail-info-text">Записывайтесь на пробное <strong>БЕСПЛАТНОЕ</strong> занятие. Это ни к чему не обязывает!</p>
   </div>
`

const educationnalClassesContent = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">Полноценное развитие</h4>
      <p class="detail-info-text">С рождения ребенок развивается и познает окружающий мир! В этом важную роль играют развивающие занятия — игры, помогающие совершенствовать мелкую моторику, мышление, творческое воображение и многое другое.</p>
      <p class="detail-info-text">Разработанный Barko school комплекс игр и упражнений создает особую среду, которая направлена на получение новых знаний, умений и навыков.</p>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Особенность направления:</h4>
      <ul class="detail-info-list check">
         <li>Курс разработан таким образом, что малыши справляются с выполнением заданий самостоятельно ли с небольшой помощью мамы.</li>
         <li>Все задания обыгрываются игрушками, что делает их выполнение увлекательным</li>
         <li>Всё занятие строится по одной теме, которая доступна и понятна детям</li>
      </ul>
   </div>

   <div class="detail-info-item">
      <p class="detail-info-text">Записывайтесь на пробное <strong>БЕСПЛАТНОЕ</strong> занятие. Это ни к чему не обязывает!</p>
   </div>
`

const tyapLyap = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">Творческие задания</h4>
      <p class="detail-info-text">С рождения ребенок развивается и познает окружающий мир! В этом важную роль играют развивающие занятия — игры, помогающие совершенствовать мелкую моторику, мышление, творческое воображение и многое другое.</p>
      <p class="detail-info-text">Разработанный Barko school комплекс игр и упражнений создает особую среду, которая направлена на получение новых знаний, умений и навыков.</p>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Особенность направления:</h4>
      <ul class="detail-info-list check">
         <li>Курс разработан таким образом, что малыши справляются с выполнением заданий самостоятельно ли с небольшой помощью мамы.</li>
         <li>На Творческих занятиях дети выполняют аппликации, доступные и разнообразные техники рисования и летка. Все задания обыгрываются игрушками, что делает их выполнение увлекательным</li>
         <li>Всё занятие строится по одной теме, которая доступна и понятна детям</li>
      </ul>
   </div>

   <div class="detail-info-item">
      <p class="detail-info-text">Записывайтесь на пробное <strong>БЕСПЛАТНОЕ</strong> занятие. Это ни к чему не обязывает!</p>
   </div>
`

const speechTherapist = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">Логопедические занятия</h4>
      <p class="detail-info-text">Развитие речи – важная составляющая гармоничного развития ребенка. Выразительная, внятная, образная речь помогает ребёнку точнее выразить свои мысли, что значительно упрощает процесс общения с окружающими людьми, сверстниками и способствует построению дружеских отношений.</p>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Признаки дял обращения к логопеду:</h4>
      <ul class="detail-info-list check">
         <li>Неправильное выговаривание ребенком хотя бы одной буквы</li>
         <li>Частичная или полная задержка развития (прогресса) речи</li>
         <li>Неправильный темп речи – слишком быстрая или слишком замедленная</li>
         <li>Оперативные вмешательства по поводу врожденных нарушений со стороны ротоглотки или лица (помощь логопеда необходима, чтобы в новом состоянии натренировать мышцы ребенка правильно манипулировать звуками)</li>
      </ul>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Состояния, при которых чаще всего обращаются к логопеду:</h4>
      <ul class="detail-info-list check">
         <li>Неправильности речевой звучности (афония, или отсутствие звуков, а также дисфония, или нарушение хоть каких-то издаваемых звуков)</li>
         <li>Неправильности при выговаривании отдельно взятых звуков (шепелявость, картавость);</li>
         <li>Заикание разного генеза</li>
         <li>Гнусавость</li>
         <li>Нарушения при чтении (дислексия)</li>
      </ul>
      <p class="detail-info-text">Если у Вас есть какие-то волнения по поводу речевого развития у Вашего ребенка, предлагаем пройти диагностику у логопеда BARKO SCHOOL.</p>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Как проходит диагностика?</h4>
      <p class="detail-info-text">В самом начале логопед знакомится с мамой и ребёнком. Собирая анамнез, в игровой форме, тестирует ребенка, определяет наличие и вид речевого нарушения, дает предметное руководство действию, которое касается только вашей ситуации. Отвечает на все вопросы родителя.</p>
      <p class="detail-info-text">По результатам диагностики, логопед составляет индивидуальную программу по коррекции речевого нарушения, подходящую именно для вашего ребёнка, которая поможет решить проблему в кратчайшие сроки.</p>
   </div>
`

const logorhythmics = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">Развиваем речь</h4>
      <p class="detail-info-text">Групповые занятия для развития речи ребёнка с помощью игрового метода работы, в котором сочетаются музыка, движения, слова стихотворений и песенок.</p>
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

   <div class="detail-info-item">
      <p class="detail-info-text">Записывайтесь на пробное <strong>БЕСПЛАТНОЕ</strong> занятие. Это ни к чему не обязывает!</p>
   </div>
`

const draw = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">Польза рисования</h4>
      <p class="detail-info-text">Польза рисования для детей невероятно высока! Вместе с BARKO SCHOOL ребенок научится правильно брать и держать карандаш, кисточку, фломастеры, целенаправленно действовать ими, благодаря чему очень хорошо развивается мелкая моторика рук.</p>
      <p class="detail-info-text">Кроме того, рисование стимулирует развитие внимания, памяти, воображения. С нашим педагогом ребенок сможет через рисунок выражать свои эмоции и чувства, что поспособствует развитию личности. В процессе рисования развивается мышление и речь. Ребенок объясняет, что он нарисовал, как, почему.</p>
      <p class="detail-info-text">Занятия в BARKO SCHOOL развивают творческие способности ребенка, квалифицированный педагог научит создавать рисунок, малыш каждый раз создает свой собственный мир и это чрезвычайно важно для него.</p>
   </div>

   <div class="detail-info-item">
      <p class="detail-info-text">Записывайтесь на пробное <strong>БЕСПЛАТНОЕ</strong> занятие. Это ни к чему не обязывает!</p>
   </div>
`

const izolepka = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">Польза изолепки</h4>
      <p class="detail-info-text">Вместе с BARKO SCHOOL ребенок научится работают с глиной — удивительным природным материалом, который может превратиться во что угодно, границ для фантазии тут совершенно нет. Работа с глиной благотворно действует на нервную систему, расслабляет, снимает нервное напряжение.</p>
      <p class="detail-info-text">В лепке сочетаются два вида деятельности: умственная и физическая. Обычно на занятии детям демонстрируется пример, который они обсуждают, и далее каждый выполняет свою вариацию под опытным руководством нашего педагога.</p>
   </div>

   <div class="detail-info-item">
      <p class="detail-info-text">Записывайтесь на пробное <strong>БЕСПЛАТНОЕ</strong> занятие. Это ни к чему не обязывает!</p>
   </div>
`

const sketching = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">Учимся быстро рисовать</h4>
      <p class="detail-info-text">Вместе с BARKO SCHOOL ребенок научится технике быстрого рисования карандашами; маркерами; красками; фломастерами. Благодаря эти навыкам ребенок за небольшой промежуток времени сможет быстро зарисовывать различные объекты и идеи.</p>
      <p class="detail-info-text">Скетчинг способствует развитию качеств, присущих художнику: видеть красоту, строить композицию, быть внимательным и творческим.</p>
   </div>

   <div class="detail-info-item">
      <p class="detail-info-text">Записывайтесь на пробное <strong>БЕСПЛАТНОЕ</strong> занятие. Это ни к чему не обязывает!</p>
   </div>
`

const chess = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">Упражнения ума</h4>
      <p class="detail-info-text">Шахматы развивают логику, учат правильно распределять время, планировать будущие ходы и эффективно распоряжаться имеющимися фигурами.</p>
      <p class="detail-info-text">Для взрослых шахматы являются хорошим увлечением, позволяющим поддерживать ум в тонусе. В детях игра воспитывает усидчивость, планирование и самодостаточность.</p>
      
   </div>

   <div class="detail-info-item">
      <p class="detail-info-text">Записывайтесь на пробное <strong>БЕСПЛАТНОЕ</strong> занятие. Это ни к чему не обязывает!</p>
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
      </ul>
   </div>

   <div class="detail-info-item">
      <p class="detail-info-text">А также проводится психологическое консультирование родителей. Работа проводится в индивидуальном формате, согласно выбранному курсу</p>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Как проходит диагностика?</h4>
      <p class="detail-info-text">Диагностика проходит комплексом, состоящий из трех этапов:</p>
      <ul class="detail-info-list check">
         <li>Психолог знакомится с родителями, собирает анамнез</li>
         <li>Психолог проводит работу ребенком, пишут тесты, выполняют диагностические упражнения</li>
         <li>По результатам диагностики, психолог составляет индивидуальную программу, подходящую именно для вашего ребёнка, которая поможет решить проблему в кратчайшие сроки и дает рекомендации</li>
      </ul>
   </div>

   <div class="detail-info-item">
      <h4 class="detail-info-title">Варианты обучения:</h4>
      <ul class="detail-info-list check">
         <li>Онлайн</li>
         <li>Оффлайн</li>
      </ul>
   </div>
`

const comprehensiveCildDev = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">Комплексное развитие</h4>
      <p class="detail-info-text">На занятиях в Barko school Ваш ребенок научится:</p>
      <ul class="detail-info-list check">
         <li>Правильно читать</li>
         <li>Писать</li>
         <li>Азам математики</li>
         <li>Коммуникативным навыкам</li>
         <li>Работе в командеспособность учиться и адаптироваться к изменениям</li>
         <li>Навыку обучения и адаптирования к изменениям</li>
      </ul>
   </div>

   <div class="detail-info-item">
      <p class="detail-info-text">Записывайтесь на пробное <strong>БЕСПЛАТНОЕ</strong> занятие. Это ни к чему не обязывает!</p>
   </div>
`

const englishMiniKindergarten = `
   <div class="detail-info-item">
      <h4 class="detail-info-title">Программа английского мини-сада:</h4>
      <ul class="detail-info-list check">
         <li>Английский 5 раз в неделю</li>
         <li>Нейрогимнастика 1 раз в неделю</li>
         <li>Шахматы 1 раз в неделю</li>
         <li>Творчество 3 раза в неделю</li>
         <li>Театральные постановки 4 раза в год</li>
      </ul>
      <p class="detail-info-text">Дети будут делать мини спектакли на английском языке! Все костюмы и декорации они будут создавать и придумывать сами!</p>
   </div>
`


// Определение необходимого контента
const getCurrentContent = function getCurrentContent (id) {
   switch (id) {
      case 1:
         return english;
      case 2:
         return french;
      case 3:
         return spanish;
      case 4:
         return softSkillsContent;
      case 5:
         return neurohymnastics;
      case 6:
         return school;
      case 7: 
         return educationnalClassesContent;
      case 8: 
         return tyapLyap;
      case 9:
         return speechTherapist;
      case 10:
         return logorhythmics;
      case 11:
         return draw;
      case 12:
         return izolepka;
      case 13:
         return sketching;
      case 14:
         return chess;
      case 15:
         return psychology;
      case 16:
         return comprehensiveCildDev;
      case 17:
         return englishMiniKindergarten;
      default:
         return 'WARNING! Говнокод, в конструкции switch'
   }
}

// Данные о курсах
const coursesData = [
   { id: 1, title: 'Английский язык', img: '../../../img/optimized/courses/english.webp', age: 'с 2 лет', priceTicket: 'от 2 700 рублей', priceIndividual: 'от 800 рублей', duration: 'от 30 минут', content: getCurrentContent(1) },
   { id: 2, title: 'Французский язык', img: '../../../img/optimized/courses/french.webp', age: 'с 2 лет', priceTicket: 'от 3 700 рублей', priceIndividual: 'от 1100 рублей', duration: 'от 30 минут', content: getCurrentContent(2) },
   { id: 3, title: 'Испанский язык', img: '../../../img/optimized/courses/spanish.webp', age: 'с 2 лет', priceTicket: 'от 3 700 рублей', priceIndividual: 'от 1100 рублей', duration: 'от 30 минут', content: getCurrentContent(3) },
   { id: 4, title: 'Soft skills (гибкие навыки)', img: '../../../img/optimized/courses/soft-skills.webp', age: 'с 6 лет', priceTicket: '4 800 рублей', content: getCurrentContent(4) },
   { id: 5, title: 'Нейрогимнастика', img: '../../../img/optimized/courses/neurohymnastics.webp', age: 'с 3 лет', priceTicket: '4 400 - 7 000 рублей', content: getCurrentContent(5) },
   { id: 6, title: 'Подготовка к школе (в течение учебного года)', img: '../../../img/optimized/courses/school.webp', age: 'с 6-7 лет', priceTicket: '6 800 рублей', content: getCurrentContent(6) },
   { id: 7, title: 'Развивающие занятия', img: '../../../img/optimized/courses/educational-classes.webp', age: 'с 9 месяцев', priceTicket: '4 400 - 6 800 рублей', content: getCurrentContent(7) },
   { id: 8, title: 'Тяп-ляп - творческие занятия', img: '../../../img/optimized/courses/tyap.webp', age: 'с 9 мес до 3 лет', priceTicket: '4 400 - 6 800 рублей', content: getCurrentContent(8) },
   { id: 9, title: 'Логопедические занятия', img: '../../../img/optimized/courses/speech-therapist.webp', age: 'с 2 лет', priceTicket: '4 800 - 8 000 рублей', priceDiagnostics: '1 200 рублей', content: getCurrentContent(9) },
   { id: 10, title: 'Логоритмика', img: '../../../img/optimized/courses/logorhythmics.webp', age: 'с 4 лет', priceTicket: '3 600 рублей', content: getCurrentContent(10) },
   { id: 11, title: 'ИЗО-студия - художественные занятия', img: '../../../img/optimized/courses/draw.webp', age: 'с 3 лет', priceTicket: '4 400 - 6 400 рублей', priceIndividual: '1 200 - 1 900 рублей', priceOneVisit: '1 500 рублей', duration: 'от 30 минут', content: getCurrentContent(11) },
   { id: 12, title: 'Изолепка', img: '../../../img/optimized/courses/izolepka.webp', age: 'с 3 лет', priceTicket: '4 400 - 6 400 рублей', priceIndividual: '1 200 - 1 900 рублей', priceOneVisit: '1 500 рублей', duration: 'от 30 минут', content: getCurrentContent(12) },
   { id: 13, title: 'Скетчинг', img: '../../../img/optimized/courses/sketching.webp', age: 'с 3 лет', priceTicket: '4 400 - 6 400 рублей', priceIndividual: '1 200 - 1 900 рублей', priceOneVisit: '1 500 рублей', duration: 'от 30 минут', content: getCurrentContent(13) },
   { id: 14, title: 'Шахматы', img: '../../../img/optimized/courses/chess.webp', age: 'с 4 лет', priceTicket: '3 700 - 6 400 рублей', priceIndividual: '1 800 рублей', content: getCurrentContent(14) },
   { id: 15, title: 'Психолог', img: '../../../img/optimized/courses/psychology.webp', age: 'до 18 лет', priceIndividual: '1 200 - 1 600 рублей', priceDiagnostics: '3 600 рублей', duration: '30 - 60 минут', content: getCurrentContent(15) },
   { id: 16, title: 'Комплексное развитие', img: '../../../img/optimized/courses/comprehensiveCildDev.webp', age: 'с 4 до 6 лет', priceTicket: '6 800 рублей', content: getCurrentContent(16) },
   { id: 17, title: 'Английский мини-сад', img: '../../../img/optimized/courses/englishMiniKindergarten.webp', age: 'с 4 до 6 лет', priceTicket: '18 000 рублей', content: getCurrentContent(17) },
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
   const $coursePriceTicketItem = document.querySelector('.short-info-item.price-ticket')
   const $coursePriceIndividualItem = document.querySelector('.short-info-item.price-individual')
   const $coursePriceDiagnosticsItem = document.querySelector('.short-info-item.price-diagnostics')
   const $coursePriceOneVisitItem = document.querySelector('.short-info-item.price-one-visit')
   const $courseDurationItem = document.querySelector('.short-info-item.duration')

   const $btnGrops = document.querySelector('.course-popup-action .btn-group')

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
   $courseDuration.textContent = duration

   // отобрвжение опцинального контента
   optionalContent(priceTicket, $coursePriceTicketItem, $coursePriceTicket, priceTicket)
   optionalContent(priceIndividual, $coursePriceIndividualItem, $coursePriceIndividual, priceIndividual)
   optionalContent(other.priceDiagnostics, $coursePriceDiagnosticsItem, $coursePriceDiagnostics, other.priceDiagnostics)
   optionalContent(other.priceOneVisit, $coursePriceOneVisitItem, $coursePriceOneVisit, other.priceOneVisit)
   optionalContent(duration, $courseDurationItem, $courseDuration, duration)


   let linkToEnglishPage = null;
   
   if (other.id === 1 && !linkToEnglishPage) {
      linkToEnglishPage = `<a href="english.html" class="ui-btn btn--bordered btn--course btn--link"><span>Подробнее</span></a>`
      $btnGrops.insertAdjacentHTML('beforeend', linkToEnglishPage)
   } else {
      linkToEnglishPage = null
   }
}

// очищение контента модального окна курса
const clearCourseConent = () => {
   const $courseDetailInfo = document.querySelector('#course-popup .detail-info')
   const $courseDetailInfoChilds = $courseDetailInfo.querySelectorAll('.detail-info-item')
   const $moreLink = document.querySelector('.course-popup-action .btn-group .btn--link')

   $moreLink?.remove()

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