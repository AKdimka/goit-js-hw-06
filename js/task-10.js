const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

let inputValue = 0;

createBtn.addEventListener('click', onCreateClick);
destroyBtn.addEventListener('click', onDestroyClick);

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

function onCreateClick() {
	inputValue = Number(input.value);
	const size = 20;
	const boxes = [];

	for (let i = 1; i <= inputValue; i += Number(input.step)) {

		if (inputValue < Number(input.min) || inputValue > Number(input.max)) {
			alert(`Значение должно быть в пределах ${input.min} - ${input.max}`)
			break;
		}
		const stringSize = (size + 10 * i) + 'px';

		boxes.push(`<div style='width:${stringSize};
		height:${stringSize};
		background-color:${getRandomHexColor()}'></div>`)
	}
	boxesContainer.innerHTML = boxes.join('');
	input.value = '';
}

function onDestroyClick() {
	boxesContainer.innerHTML = ''
	input.value = ''
}








/* const refs = {
	create: document.querySelector('button[data-create]'),
	destroy: document.querySelector('button[data-destroy]'),
	input: document.querySelector('input'),
	container: document.querySelector('#boxes')
}

refs.create.addEventListener('click', onCreateElement);
refs.destroy.addEventListener('click', destroyBoxes);

let elementSize = 20;

function onCreateElement(e) {
	const currentValue = Number(refs.input.value);
	const fragment = document.createDocumentFragment();
	console.log(currentValue);
	refs.container.innerHTML = '';
	elementSize = 20;
	for (let i = 0; i < currentValue; i += 1) {
		const div = createBoxes();
		fragment.append(div);
	}
	refs.container.append(fragment);
	refs.input.value = '';
};

function createBoxes() {
	const box = document.createElement('div');
	elementSize += 10
	box.style.width = elementSize + 'px';
	box.style.height = elementSize + 'px';
	box.style.background = getRandomHexColor();
	return box;
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {
	refs.container.innerHTML = '';
	elementSize = 20;
} */