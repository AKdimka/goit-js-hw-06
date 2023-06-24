const input = document.querySelector('#name-input');
const name = document.querySelector('#name-output');

const inputChange = (event) => {
	let inputText = event.currentTarget.value;

	event.currentTarget.value !== '' ?
		name.textContent = inputText :
		name.textContent = 'Anonymous'
};

input.addEventListener('input', inputChange);



































/* const refs = {
	input: document.querySelector('#name-input'),
	nameLabel: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
	if (event.currentTarget.value !== '') {
		refs.nameLabel.textContent = event.currentTarget.value;
	} else {
		refs.nameLabel.textContent = 'Anonymous'
	}
}; */