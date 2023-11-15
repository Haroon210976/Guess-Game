let guessNumber = document.querySelector("#num-guess");

let display = document.querySelector("#display");

let button = document.querySelector("#btn");

let randomNumber = Math.floor(Math.random() * 100) + 1;

let score = 0;

button.addEventListener("click", function () {
  // display.classList.remove("invalid-input")
  guessNumber.value = Number.parseInt(guessNumber.value);
  display.innerText = guessNumber.value;

  if (!isNaN(guessNumber.value)) {
    score++;
    display.setAttribute("style", "color: black;");
    display.innerText = guessNumber.value;

    if (guessNumber.value <= 0 || guessNumber.value > 100) {
      display.innerText = `invalid Number "${guessNumber.value}"`;
    } else if (guessNumber.value > randomNumber) {
      display.innerText = `Guess Number "${guessNumber.value}" is  Greater than Original Number`;
    } else if (guessNumber.value < randomNumber) {
      display.innerText = `Guess Number "${guessNumber.value}" is  Smaller than Original Number`;
    } else if (guessNumber.value == randomNumber) {
      display.setAttribute("style", "color: green;");
      display.innerText = `Congrats You Guess The Correct Number in ${score} Guesses "${guessNumber.value} = ${randomNumber}"`;
      btn.setAttribute("disabled" , "true")
      guessNumber.setAttribute('readonly', 'true');
    }
  } else {
    display.setAttribute("style", "color: red;");
    display.innerText = `Not a Number "${guessNumber.value}"`;
    // display.classList.add("invalid-input")
  }
});
