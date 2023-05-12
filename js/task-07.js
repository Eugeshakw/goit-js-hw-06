const inpEl = document.querySelector('#font-size-control')
const spEl = document.querySelector('#text')



inpEl.addEventListener('input', setInp) 
function setInp(event) {
    spEl.style.fontSize = event.currentTarget.value + 'px'
}
    



   
    
