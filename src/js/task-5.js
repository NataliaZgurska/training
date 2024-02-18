// Завдання 4
// Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
// */

// < !--ЗАДАЧА 4 -- >
	// <div class="square">
	// 	<p class="taskTitle">ЗАДАЧА 4</p>
	// 	<div id="box"></div>
	// 	<button id="decrease">Зменшити</button>
	// 	<button id="increase">Збільшити</button>
	// </div>;

const square = document.querySelector('#box');
const btnDecrease = document.querySelector('#decrease');
const btnIncrease = document.querySelector('#increase');
const container = document.querySelector('.js-square');

container.addEventListener('click', onBtnClick);

let boxWidth = parseInt(getComputedStyle(box).width);
let boxHeight = parseInt(getComputedStyle(box).height);

function onBtnClick(e) {
    if (e.target.nodeName != 'BUTTON') { return };
    console.log("довжина сторони =", boxWidth, "px");
  
    if (e.target.id === 'decrease') {
        if (boxWidth ===10) {
            alert('Розмір квадарата мінімальний');
            return;
        } else {
            boxWidth -= 10;
            boxHeight -= 10; 
        }            
    } else {
        if (boxWidth ===500) {
            alert('Розмір квадарата максимальний');
            return;
        } else {
            boxWidth += 10;
            boxHeight += 10; 
        } 
    }
    box.style.width = `${boxWidth}px`;
    box.style.height = `${boxHeight}px`;
    box.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}