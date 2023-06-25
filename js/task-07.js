const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

text.style.fontSize = `${input.value}px`;

input.addEventListener('input', inputChange);

function inputChange(event) {
	text.style.fontSize = `${event.currentTarget.value}px`
};












































/* const refs = {
	rangeInput: document.querySelector('#font-size-control'),
	textBelongInput: document.querySelector('#text'),
};

refs.textBelongInput.style.fontSize = `${refs.rangeInput.value}px`;


const onRangeChange = (event) => {
	const { value } = event.target;
	refs.textBelongInput.style.fontSize = `${value}px`;
};

refs.rangeInput.addEventListener('input', onRangeChange); */