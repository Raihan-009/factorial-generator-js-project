const inputText = document.querySelector("input");
const outputText = document.querySelector(".output");

inputText.addEventListener("keyup", () => {
  filterNumber = inputText.value.replace(/[^-?0-9]/gi, "");
  console.log(filterNumber);
  outputText.style.display = "none";
});

const factorialButton = document.querySelector("button");
factorialButton.addEventListener("click", () => {
  console.log("clicked");
  outputText.style.display = "block";

  const number = parseInt(filterNumber);
  if (number < 0) {
    console.log("Error! Factorial for negative number does not exist.");
    return (outputText.innerHTML = `Factorial for <span>${number}</span> never exist.`);
  } else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
    return (outputText.innerHTML = `Factorial for ${number} is <span>'1'</span>.`);
  } else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
      fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
    return (outputText.innerHTML = `<span>'${fact}'</span> is ther factorial value of ${number}`);
  }
});
