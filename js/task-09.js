function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChange = document.querySelector('.change-color');
const changeColor = document.querySelector('.color')

btnChange.addEventListener('click', () =>{
 document.body.style.backgroundColor = getRandomHexColor();
  changeColor.textContent = document.body.style.backgroundColor;
});









