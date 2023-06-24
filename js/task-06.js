const input = document.querySelector('#validation-input');
const validLength = input.getAttribute('data-length')

const inputBlur = (event) => {
	input.classList.add('valid')

	event.currentTarget.value.length === Number(validLength) ?
		input.classList.replace('invalid', 'valid') :
		input.classList.replace('valid', 'invalid')
}

input.addEventListener('blur', inputBlur)














































/* const inputField = document.querySelector('#validation-input');
const dataLength = inputField.getAttribute('data-length');

inputField.addEventListener('blur', onBlur);

function onBlur() {
	inputField.classList.add('invalid')

	inputField.value.length === Number(dataLength) ?
		inputField.classList.replace('invalid', 'valid') :
		inputField.classList.replace('valid', 'invalid');
}; */