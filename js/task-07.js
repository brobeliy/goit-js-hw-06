const sizeInput = document.querySelector("#font-size-control");
const sizeText = document.querySelector("#text");
sizeInput.value = Number(sizeInput.min);
sizeInput.addEventListener("input", () => {
  sizeText.style.fontSize = sizeInput.value + "px";
});
