const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', onInputHandle);

function onInputHandle() {
  let userName = inputName.value.trim();

  if (userName == '') {
    userName = 'Anonymous';
  }
  
  outputName.textContent = userName;  
}


//****** Обробка форми ********
const form = document.querySelector('.form-login');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

if (email == '' || password == '') {
    alert('All form fields must be filled in')
} else {
    const userData = { email, password };
    console.log(userData);
    form.reset();
}
}




// Зміна кольору фона 
const btnColor = document.querySelector('.change-color');
const bodyElem = document.querySelector('body');
const spanElem = document.querySelector('.color')

btnColor.addEventListener('click', onButtonClick);


function onButtonClick() {
  const bgColor = getRandomHexColor();
  bodyElem.style.backgroundColor = bgColor;
  spanElem.textContent = bgColor
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}