const form = document.getElementById('contact-form');

// Создаем экземпляр маски инпута телефона
// const inputMask = new Inputmask('+7 (999) 999-99-99')
// inputMask.mask(phone)

function validForm (name, phone, email, message) {
	let nameRes = nameValid(name);
	let phoneRes = phoneValid(phone);
	let emailRes = emailValid(email);
	let messageRes = messageValid(message);

	return (nameRes || phoneRes || emailRes || messageRes) ? false : true;
}

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
			errorHandler(true, $phone, 'Телефон может содержать только цифры')
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






form.addEventListener('submit', (event) => {
	event.preventDefault();

	const formData = new FormData(form);
	const isValid = validForm('[data-valid="name"]', '[data-valid="phone"]', '[data-valid="email"]', '[data-valid="message"]')

	if (isValid) {
		fetch('../libs/mail.php', {
			method: 'POST',
			body: formData
		})
		.then(response => {
			response.ok && alert('Форма отправлена')
		})
		.catch(error => {
			console.error(error, 'Форма не отправилась');
		});
	}

	

});