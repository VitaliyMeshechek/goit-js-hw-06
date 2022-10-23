// const list = document.querySelector('#categories');
// const allCategories = list.children;
// console.log(`Number of categories: ${allCategories.length}`);
// const items = list.querySelectorAll('.item');
// console.log(items);
//    const itemsTitleAnimals = list.firstElementChild.children[0].textContent;
//    console.log(`Category: ${itemsTitleAnimals}`);
//    const itemsTitleAnimalsEl = list.lastElementChild.children.length;
//    console.log(`Elements: ${itemsTitleAnimalsEl}`);
//    const itemTitleProducts = list.children[1].firstElementChild.textContent;
//    console.log(`Category: ${itemTitleProducts}`);
//    const itemsTitleProductsEl = list.lastElementChild.children.length;
//    console.log(`Elements: ${itemsTitleProductsEl}`);
//    const itemTitleTechnologies = list.children[2].firstElementChild.textContent;
//    console.log(`Category: ${itemTitleTechnologies}`);
//    const itemsTitleTechnologiesEl = list.lastElementChild.children.length;
//    console.log(`Elements: ${itemsTitleTechnologiesEl}`);

const list = document.querySelector('#categories');
const allCategories = list.children;
console.log(`Number of categories: ${allCategories.length}`);
const items = document.querySelectorAll('.item');
console.log(items);
items.forEach(item => {
   const category = item.firstElementChild.textContent;
   console.log(`Category: ${category}`);
   const elements = item.lastElementChild.children.length;
   console.log(`Elements: ${elements}`);
});



