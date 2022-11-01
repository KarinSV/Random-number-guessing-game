const form = document.getElementById("guessForm");
const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");

let number = Math.floor(Math.random() * 100) + 1;
console.log(number);

form.onsubmit = function (event) {
  event.preventDefault();

  let guess = Number(form.elements.guess.value);
  form.elements.guess.value = "";

  if (Number.isNaN(guess)) {
    showErrorMessage("That is not a number...");
  } else if (guess === number) {
    showSuccessMessage("Congratulation!!! That's correct number");
  } else if (guess < number) {
    showErrorMessage("Let's try higher");
  } else if (guess > number) {
    showErrorMessage("Let's try lower");
  }
};

function showErrorMessage(message) {
  errorMessage.classList.add("visible");
  errorMessage.innerHTML = message;

  setTimeout(function () {
    errorMessage.classList.remove("visible");
  }, 1000);
}

function showSuccessMessage(message) {
  successMessage.classList.add("visible");
  successMessage.innerHTML = message;

  setTimeout(function () {
    successMessage.classList.remove("visible");
  }, 1000);
}