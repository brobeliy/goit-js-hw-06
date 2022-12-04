const ulNumbers = document.querySelectorAll(".item");
console.log(" ");
console.log("Number of categories:", ulNumbers.length);
console.log(" ");
ulNumbers.forEach((element) => {
  const array = [...element.children];
  console.log("Category:", array[0].textContent);
  console.log("Elements:", array[1].children.length);
});
