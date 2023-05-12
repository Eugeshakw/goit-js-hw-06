
const inpEl = document.querySelector('#validation-input');
inpEl.style.outline = 'none';

const dataEl = Number(inpEl.getAttribute('data-length'))



inpEl.addEventListener('blur', event => {
    if (event.target.value.length === dataEl){
        inpEl.classList.add('valid');
        if(inpEl.classList.contains('invalid')){
            inpEl.classList.remove('invalid');
            } 
           } else {
            inpEl.classList.add('invalid');
        }
    
})






