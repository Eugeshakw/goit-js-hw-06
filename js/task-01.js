
// const ulEl = document.querySelector('#categories')
// // const totalEl = ulEl.querySelectorAll('.item');
// const totalEl = ulEl.querySelectorAll('.item')
// console.log(`Number of categories: ${totalEl.length}`)


// totalEl.forEach((item) => {
//     const titleEl = item.querySelector('h2').textContent;
//     const liEl = item.querySelectorAll('li').length;
//     console.log(`Category: ${titleEl}`);
//     console.log(`Elements: ${liEl}`);
// });


const ulEl = document.querySelector('#categories');
const firsEl = document.querySelectorAll('.item');
const liEl = ulEl.children;
console.log(firsEl)
console.log(`Number of categories: ${liEl.length}`);


firsEl.forEach(item => {
    const litxt = item.firstElementChild.textContent;
    const listEL = item.lastElementChild.children;
    console.log(`Elements: ${listEL.length}`);
    console.log(`category: ${litxt}`);
})

















