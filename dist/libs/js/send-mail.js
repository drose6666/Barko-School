const form = document.getElementById('contact-form');

// Создаем экземпляр маски инпута телефона
// const inputMask = new Inputmask('+7 (999) 999-99-99')
// inputMask.mask(phone)

function nameValid (field) {
	const $name = document.querySelector(field)
	const nameVal = $name?.value.trim()
	const nameRegex = /^[A-zА-я\s_ ][^0-9]+$/; //'[\\w\s]+';

	if ($name) 
		if (nameVal === '') {
			errorHandler(true, $name, 'Это обязательное поле')
			return true
		} else if (!nameRegex.test(nameVal)) {
			errorHandler(true, $name, 'Имя может содержать только буквы')
			return true
		} else {
			errorHandler(false, $name, '')
			return false
		}
}

function phoneValid (field) {
	const $phone = document.querySelector(field)
	const phoneVal = $phone?.value.trim()
	const phoneRegex = /^(\s*)?(\+)?([- _():+]?\d[- _():+]?){11,14}(\s*)?$/;
	
	if ($phone) 
		if (phoneVal === '') {
			errorHandler(true, $phone, 'Это обязательное поле')
			return true
		} else if (!phoneRegex.test(phoneVal)) {
			errorHandler(true, $phone, 'Введите корректный номер телефона')
			return true
		} else {
			errorHandler(false, $phone, '')
			return false
		}
}

function emailValid (field) {
	const $email = document.querySelector(field)
	const emailVal = $email?.value.trim()
	const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/     
	
	if ($email) 
		if (emailVal === '') {
			errorHandler(true, $email, 'Это обязательное поле')
			return true
		} else if (!emailRegex.test(emailVal)) {
			errorHandler(true, $email, 'Введите email вида example@gmail.com')
			return true
		} else {
			errorHandler(false, $email, '')
			return false
		}
			
}

function messageValid (field) {
	const $message = document.querySelector(field)
	const messageVal = $message?.value.trim()

	if ($message) 
		if (messageVal === '') {
			errorHandler(true, $message, 'Это обязательное поле')
			return true
		} else if (messageVal.length > 3000) {
			errorHandler(true, $message, 'Не более 3000 символов')
			return true
		} else {
			errorHandler(false, $message, '')
			return false
		}
}

function ticketsField (field) {
	const $tickets = document.querySelector(field)
	const ticketsVal = $tickets?.value.trim()

	if ($tickets) 
		if (ticketsVal === '') {
			errorHandler(true, $tickets, 'Это обязательное поле')
			return true
		} else {
			errorHandler(false, $tickets, '')
			return false
		}
}

function errorHandler (error, field, message) {
	const fieldParent = field.parentNode
	const fieldError = fieldParent.querySelector('.error-message')

	if (error) {
		fieldParent.classList.add('error')
		fieldError.textContent = message
	} else {
		fieldParent.classList.remove('error')
		fieldError.textContent = ''
	}
}



// Проверка валидности всех полей
function validForm (name, phone, email, message, tickets) {
	let nameRes = nameValid(name);
	let phoneRes = phoneValid(phone);
	let emailRes = emailValid(email);
	let messageRes = messageValid(message);
	let ticketsRes;

	tickets ? ticketsRes = ticketsField(tickets) : null
	

	return (nameRes || phoneRes || emailRes || ticketsRes || messageRes) ? false : true;
}

// Запрос на отправку формы
function sendForm () {
	const formData = new FormData(form);
	const isValid = validForm('[data-valid="name"]', '[data-valid="phone"]', '[data-valid="email"]', '[data-valid="tickets"]', '[data-valid="message"]')

	if (isValid) {
		fetch('../mail.php', {
			method: 'POST',
			body: formData
		})
		.then(response => {
			if (response.ok) {
				for (let item of form.querySelectorAll('[data-valid]')) {
					item.value = ''
				}

				new openPopup({
					popup: '#success-popup',
					close: '#success-popup .ui-close',
					closeItem: '#success-popup .confirm--btn',
					openFlag: true,
					overlay: '#success-popup .popup-overlay'
				})
			} else {
				new openPopup({
					popup: '#error-popup',
					close: '#error-popup .ui-close',
					closeItem: '#error-popup .confirm--btn',
					openFlag: true,
					overlay: '#error-popup .popup-overlay'
				})
			}
		})
		.catch(error => {
			new openPopup({
				popup: '#error-popup',
				close: '#error-popup .ui-close',
				closeItem: '#error-popup .confirm--btn',
				openFlag: true,
				overlay: '#error-popup .popup-overlay'
			})
		});
	}
}

// Удаление класса .error у полей ввода при фокусе
for (let el of document.querySelectorAll('.field')) {
	el.addEventListener('focus', () => {
		errorHandler(false, el, '')
	})
}

// Событие отправки формы
form.addEventListener('submit', (event) => {
	event.preventDefault();
	sendForm()
});