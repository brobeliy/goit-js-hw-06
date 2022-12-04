function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColor = document.querySelector(".change-color");
const textColorName = document.querySelector(".color");
const fileBody = document.querySelector("body");

buttonChangeColor.addEventListener("click", () => {
  fileBody.style.backgroundColor = getRandomHexColor();
  textColorName.textContent = fileBody.style.backgroundColor;
});
