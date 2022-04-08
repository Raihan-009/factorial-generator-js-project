const inputText = document.querySelector("input");
inputText.addEventListener("keyup", () => {
  filterNumber = inputText.value.replace(/[^0-9]/gi, "");
  console.log(filterNumber);
});

const factorialButton = document.querySelector("button");
factorialButton.addEventListener("click", () => {
  console.log("clicked");
});
