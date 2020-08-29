// const listEl = document.querySelectorAll('#categories>li');
// // const listUl = listEl.forEach(el=>{
// //    console.dir(el.querySelector('ul')); 
// // });
// // console.log(listEl);

// const arrlistEl = [...listEl];
// console.log(arrlistEl);
// const listUl = arrlistEl.map(el=>el.querySelector('ul').querySelectorAll('li'));
// console.log(listUl);
const categoriesRef = document.querySelectorAll('.item');
// console.log(categoriesRef);
console.log(`В списке ${categoriesRef.length} категории.`);
categoriesRef.forEach(el=>console.log(`Категория: ${el.querySelector('h2').textContent}.
 Количество элементов: ${el.querySelectorAll('li').length}`));