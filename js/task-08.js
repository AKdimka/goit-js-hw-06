const form = document.querySelector('.login-form');

form.addEventListener('submit', submitLoginFoarm);

function submitLoginFoarm(e) {
	e.preventDefault()

	const elements = e.currentTarget.elements;
	const email = elements.email.value;
	const password = elements.password.value;

	const data = { email, password };

	email.value === '' || password.value === '' ?
		alert("Всі поля повинні бути заповнені") :
		console.log(data);

	form.reset();
};





























/* const refs = {
	form: document.querySelector('.login-form')
};

refs.form.addEventListener('submit', sendForm);

function sendForm(event) {
	event.preventDefault();
	const formElements = event.currentTarget.elements;
	const mail = formElements.email.value;
	const password = formElements.password.value;

	if (mail === '' || password === '') {
		return alert('Все поля должны быть заполнены!');
	};

	const formData = { mail, password };

	console.log(formData);
	event.currentTarget.reset();
}; */