const box = document.querySelector('#boxes');
const controlContainer = document.querySelector('#controls')
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');

buttonCreate.addEventListener('click', onButtonCreateClick)
buttonDestroy.addEventListener('click', onButtonDestroyClick)

let amount;

function onButtonCreateClick() {
  box.innerHTML = '';
  const inputValue = Number(controlContainer.firstElementChild.value);
  
  if (inputValue >= 1 && inputValue <= 100) {
    amount = inputValue;
    createBoxes(amount);
  } else if (inputValue == '') {
       createBoxes(amount);
  }
  controlContainer.firstElementChild.value = '';
}

function onButtonDestroyClick() {
  box.innerHTML = '';
}

function createBoxes(amount) {
  let boxWidth = 30;
  let boxHeight = 30;
 
  for (let index = 0; index < amount; index++) {
    const boxNew = document.createElement('div');
    boxNew.classList.add('box');
    boxNew.style.width = `${boxWidth}px`;
    boxNew.style.height = `${boxHeight}px`;
    boxNew.style.backgroundColor = getRandomHexColor();
    box.append(boxNew);

    boxWidth += 10;
    boxHeight += 10;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
