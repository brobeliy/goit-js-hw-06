const properties = {
  input: document.querySelector("#validation-input"),
};

properties.input.addEventListener("blur", (elem) => {
  const lengthValue = elem.currentTarget.value.length;
  const inputLength = Number(properties.input.dataset.length);
  if (lengthValue <= inputLength && lengthValue > 0) {
    properties.input.classList.add("valid");
    properties.input.classList.remove("invalid");
  } else if (lengthValue > inputLength) {
    properties.input.classList.remove("valid");
    properties.input.classList.add("invalid");
  } else {
    properties.input.classList.remove("invalid");
    properties.input.classList.remove("valid");
  }
});
