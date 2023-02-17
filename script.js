"use strict";

const checkBtn = document.getElementById("check-btn");
const message = document.getElementById("message");
let scoreRemaining = document.getElementById("score");
const highScore = document.getElementById("high-score");

scoreRemaining.innerText = 20;

// //Variale to generate a random number
let randomNumber = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
console.log(randomNumber);

checkBtn.addEventListener("click", checkingNumer);

function checkingNumer() {
  let inputNumber = document.getElementById("number-input").value;

  if (!inputNumber) {
    message.innerText = "Enter A Number";
  } else if (inputNumber > randomNumber) {
    message.innerText = "Too High";
    scoreRemaining.innerText--;
  } else if (inputNumber < randomNumber) {
    message.innerText = "Too Low";
    scoreRemaining.innerText--;
  } else if (inputNumber == randomNumber) {
    message.innerText = "Correct";
    document.getElementById("random-number").innerText = randomNumber;
    const highScore = document.getElementById("high-score");
    highScore.innerText = scoreRemaining.innerText;

    //Disabling the input not to recieve any input when the the number is guessed right
    document.getElementById("number-input").disabled = true;

    //Disabling the button the the number is guessed right
    checkBtn.disabled = true;
    checkBtn.classList.add("disable");
    
    //Changing the background color when number guessed right
    document.body.style.backgroundColor = "#60b347";
  }
}
