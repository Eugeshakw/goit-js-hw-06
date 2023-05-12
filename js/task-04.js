
const counterValue = document.querySelector('button[data-action="increment"]');
const decrementValue = document.querySelector('button[data-action="decrement"]');

const totalValue = document.querySelector('#value')
counterValue.addEventListener('click', () => {
    totalValue.textContent = parseInt(totalValue.textContent) + 1;
    console.log('Элемент +1')
    })

    
    
decrementValue.addEventListener('click', () => {
        totalValue.textContent = parseInt(totalValue.textContent) - 1;
        console.log('Элемент -1')
    })
   
