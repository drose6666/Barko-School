const form = document.getElementById('contact-form');
const phone = form.querySelector('input[type="tel"]')

// Создаем экземпляр маски инпута телефона
const inputMask = new Inputmask('+7 (999) 999-99-99')
inputMask.mask(phone)

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const formData = new FormData(form);

	fetch('../libs/mail.php', {
		method: 'POST',
		body: formData
	})
	.then(response => {
		response.ok && alert('Форма отправлена')
	})
	.catch(error => {
		console.error(error);
	});
});