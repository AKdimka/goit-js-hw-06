const categories = document.querySelectorAll('.item > h2');

//console.log(categories) /* nodeList: pseudoArrey */

const categoriesCounter = categories.length;

//console.log(`Number of categories: ${categoriesCounter}`);

console.log('Number of categories: ' + categoriesCounter);


categories.forEach(item => console.log(`Category: ${item.textContent}
Elements:	${item.nextElementSibling.children.length}`))































/* const categoriesItemsCount = document.querySelectorAll(".item h2")
console.log(`Number of categories: ${categoriesItemsCount.length}`)

categoriesItemsCount.forEach(ulCategories =>
	console.log(`Category: ${ulCategories.textContent}
Elements: ${ulCategories.nextElementSibling.children.length}`)) */