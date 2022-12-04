const buttonPlus = document.querySelector("[data-action=increment]");
const buttonMinus = document.querySelector("[data-action=decrement]");
const counterValue = document.getElementById("value");
let counter = Number(counterValue.textContent);

buttonPlus.addEventListener("click", () => {
  console.log("clicked + 1");
  counter += 1;
  counterValue.textContent = counter;
});

buttonMinus.addEventListener("click", () => {
  console.log("clicked - 1");
  counter -= 1;
  counterValue.textContent = counter;
});
