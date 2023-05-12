const inpEl = document.querySelector('#name-input')
const spEl = document.querySelector('#name-output')

inpEl.addEventListener('input', (event) => {
    
   spEl.textContent = event.currentTarget.value ? event.currentTarget.value : 'Anonymous'
});