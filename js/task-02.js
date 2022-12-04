const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulList = document.querySelector("#ingredients");
const ingredientsList = ingredients.map((element) => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = element;
  return listItem
})
ulList.append(...ingredientsList)

