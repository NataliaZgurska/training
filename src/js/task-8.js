const targetEl = document.querySelector('.js-target')
const element = document.querySelector('.element');
const loadBtn = document.querySelector('.js-btn');

let currentPage;
const totalPages = 100;


loadBtn.addEventListener('click', onBtnClick);

function onBtnClick(e) {
    e.preventDefault();
    currentPage = 1;
    element.innerHTML = '';

    console.log('create rounds');
    renderRounds();
    updateStatusObserver();
}

function renderRounds() {
    let roundArray = [];
    let roundTeg = '<div class="round"></div>';

    for (let i = 0; i < 5; i++) {
       roundArray.push(roundTeg)
    }
    let markup = roundArray.join('');
    element.insertAdjacentHTML('beforeend', markup)
}

function loadMore() {
    currentPage += 1;
    renderRounds();
    updateStatusObserver();
}

function updateStatusObserver() {
    const isLastPage = currentPage >= totalPages;
    if (isLastPage) {
       observer.unobserve(targetEl) 
    } else {
        observer.observe(targetEl);
    }
}


const callback = function (entries, observer) {
      entries.forEach((entry) => {
      if (entry.isIntersecting) {
          loadMore();
        console.log('loadMore');
      }
  });
}

const observer = new IntersectionObserver(callback);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}












// вішаєм в сабміті всередені функції updateStatusObserver
// observer.observe(targetEl);