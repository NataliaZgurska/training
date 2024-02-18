const dateCreate = new Date("2024-01-24").toDateString();
const dateToday = new Date().toDateString();
console.log(dateCreate, dateToday);

const dateHtml = document.querySelector('.js-date')
dateHtml.children[0].textContent = `дата створення: ${dateCreate},`;
dateHtml.children[1].textContent = `сьогодні: ${dateToday}`;


// --------------------

const setBtn = document.querySelector(".js-set");
const clearBtn = document.querySelector(".js-clear");

let timeoutId;

setBtn.addEventListener("click", () => {
  timeoutId = setTimeout(() => {
      console.log("I love async JS!");
      console.log(timeoutId);
  }, 2000);
});

clearBtn.addEventListener("click", () => {
  clearTimeout(timeoutId);
  console.log(`Timeout with id ${timeoutId} has stopped!`);
});


// const startBtn = document.querySelector(".js-start");

// startBtn.addEventListener("click", () => {
//   const intervalId = setInterval(() => {
//     console.log(`Interval ID: ${intervalId}, ${Math.random()}`);
//   }, 1000);
// });
