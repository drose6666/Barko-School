const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const formData = new FormData(form);

	fetch('../send-mail.php', {
		method: 'POST',
		body: formData
	})
	.then(response => response.json())
	.then(data => {
		alert(data.message);
	})
	.catch(error => {
		console.error(error);
	});
});