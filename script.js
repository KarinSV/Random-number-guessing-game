"use strict";

// Variables to declare a constant (unchanging) variable

const form = document.getElementById("guessForm");
const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");

function $(id){
  return document.getElementById(id);
}

// ! Important
// Variable which to generate a number between 0 and 100

let number = Math.floor(Math.random() * 100) + 1;

// The form to input number

form.onsubmit = function (event) {
  event.preventDefault();

  let guess = Number(form.elements.guess.value);
  form.elements.guess.value = "";

  // The conditional statements: more, less and equal.

  if (Number.isNaN(guess)) {
    showErrorMessage("That is not a number&#x2757");
  } else if (guess === number) {
    showSuccessMessage("Congratulations!!! &#x1F389 That's the correct number");
    number = Math.floor(Math.random() * 100) + 1;
    console.log(number);
  } else if (guess < number) {
    showErrorMessage("Let's try higher &#x2B06");
  } else if (guess > number) {
    showErrorMessage("Let's try lower &#x2B07");
  }
};

// Function which shows error message, if you don't guess a random number between 1 and 100.

function showErrorMessage(message) {
  errorMessage.classList.add("visible");
  errorMessage.innerHTML = message;

  setTimeout(function () {
    errorMessage.classList.remove("visible");
  }, 1000);
}

// Function which shows success message, if you guess a random number between 1 and 100.

function showSuccessMessage(message) {
  successMessage.classList.add("visible");
  successMessage.innerHTML = message;

  setTimeout(function () {
    successMessage.classList.remove("visible");
  }, 1000);
}