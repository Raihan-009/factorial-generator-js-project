const inputText = document.querySelector("input");
const factorialButton = document.querySelector("button");
factorialButton.disabled = true;
const outputText = document.querySelector(".output");

inputText.addEventListener("keyup", () => {
  filterNumber = inputText.value.replace(/[^-?0-9]/gi, "");
  console.log(filterNumber);
  outputText.style.display = "none";
  if (filterNumber) {
    return (factorialButton.disabled = false);
  }
  factorialButton.disabled = true;
});

factorialButton.addEventListener("click", () => {
  // console.log("clicked");
  outputText.style.display = "block";
  outputText.style.marginTop = "10px";

  const number = parseInt(filterNumber);
  if (number < 0) {
    return (outputText.innerHTML = `Factorial for <span>${number}</span> never exist.`);
  } else if (number === 0) {
    return (outputText.innerHTML = `Factorial for ${number} is <span>'1'</span>.`);
  } else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
      fact *= i;
    }
    return (outputText.innerHTML = `<span>'${fact}'</span> is ther factorial value of ${number}`);
  }
});
