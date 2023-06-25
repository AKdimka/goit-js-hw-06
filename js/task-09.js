const body = document.querySelector('body');
const colorCode = document.querySelector('.color');
const changeColorBtn = document.querySelector('button.change-color');

changeColorBtn.addEventListener('click', changeBgColor)

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

function changeBgColor() {
	const hexCode = getRandomHexColor();

	colorCode.textContent = hexCode;

	body.style.backgroundColor = hexCode;
};





























/* const refs = {
	changeColorBtn: document.querySelector('.change-color'),
	changeColorLabel: document.querySelector('.color')
}

const onChangeColorBtnClick = () => {
	const color = getRandomHexColor()
	document.body.style.background = color;
	refs.changeColorLabel.textContent = color;
}
refs.changeColorBtn.addEventListener('click', onChangeColorBtnClick);

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
} */