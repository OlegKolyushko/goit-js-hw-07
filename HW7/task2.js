const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientsListRef = document.querySelector('#ingredients');

  function createMarkup(arr){
    const ingr = arr.map(el=>{
      const item = document.createElement('li')
       item.textContent = el
       return item;
    })
    return ingr;
  };
  // console.log(createMarkup(ingredients));
  const listEl = createMarkup(ingredients);
    ingredientsListRef.append(...listEl);

  // const listEl = ingredients.map(el=>{
  //     const item = document.createElement('li')
  //     item.textContent = el
  //     return item;
  // });
//   ingredientsListRef.append(...listEl);

// const listElMap = ingredients.map(el=>`<li>${el}</li>`)

// ingredientsListRef.insertAdjacentHTML('beforeend', listElMap);
