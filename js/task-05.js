const properties = {
  input: document.querySelector("#name-input"),
  h1: document.querySelector("#name-output"),
};
properties.input.addEventListener("input", (name) => {
  return name.currentTarget.value
    ? (properties.h1.textContent = name.currentTarget.value)
    : (properties.h1.textContent = "Anonymous");
});
