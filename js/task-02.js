const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const ingridientsList = document.querySelector('#ingredients');

const markup = ingredients.map(ingridient => `<li class='item'>${ingridient}</li>`).join('');

ingridientsList.innerHTML = markup;



































/* const listItem = (ingredients) => ingredients.map(element => {
	const item = document.createElement('li')
	item.className = ('item')
	item.textContent = element
	return item
});
const itemLi = document.querySelector('#ingredients');
itemLi.append(...listItem(ingredients)); */