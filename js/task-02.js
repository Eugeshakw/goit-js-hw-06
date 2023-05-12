const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients'); // делаю путь к id

const elements = ingredients.map(option => { // метод map делаю перебор массива
  const newEl = document.createElement('li') // создаю элемент li
  newEl.classList.add('item'); // добавляю класс item
  newEl.textContent = option; // наполняем текстовый контент который мы перебрали в массиве 

  
  return newEl; // возвращаем nawEl li
})
ingredientsEl.append(...elements); // распыляем массив 




console.log('Илюха педик!')



