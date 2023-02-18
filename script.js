"use strict";

const checkBtn = document.getElementById("check-btn");
const message = document.getElementById("message");
let scoreRemaining = document.getElementById("score");
let highScore = document.getElementById("high-score");

scoreRemaining.innerText = 20;

highScore.innerText = 0

//Guessed Count variable
let guessedCount = 0;

// //Variale to generate a random number
let randomNumber = Math.floor(Math.random() * (20 - 1 + 1)) + 1;

checkBtn.addEventListener("click", checkingNumer);

function checkingNumer() {
  
  //Increamenting the number of guesses
  guessedCount++;

  let inputNumber = document.getElementById("number-input").value;

  if (!inputNumber) {
    message.innerText = "Enter A Number";
    guessedCount = 0;
  } else if (inputNumber > randomNumber) {
    message.innerText = "📉 Too High";
    scoreRemaining.innerText--;
  } else if (inputNumber < randomNumber) {
    message.innerText = "📈 Too Low";
    scoreRemaining.innerText--;
  } else if (inputNumber == randomNumber) {
    //Correct message
    message.innerText = `🎉 Correct, you guessed ${guessedCount}`;
    document.getElementById("random-number").innerText = randomNumber;

    //Updating the High Score
    const currentScore = Number(scoreRemaining.innerText);
    const currentHighScore = Number(highScore.innerText);

    if (Number(scoreRemaining.innerText) > currentHighScore) {
      highScore.innerText = currentScore;
    }

    //Disabling the input not to recieve any input when the the number is guessed right
    document.getElementById("number-input").disabled = true;

    //Disabling the button the the number is guessed right
    checkBtn.disabled = true;
    checkBtn.classList.add("disable");

    //Changing the background color when number guessed right
    document.body.style.backgroundColor = "#60b347";
  }

  //If the remaining score is 0, game lost
  if (scoreRemaining.innerText == 0) {
    document.getElementById("number-input").disabled = true;

    //Disabling the button the the number is guessed right
    checkBtn.disabled = true;
    checkBtn.classList.add("disable");

    //Changing the background color when number guessed right
    document.body.style.backgroundColor = "#f08080";

    message.innerText = "💥 You Lost, Out Of Scores";

    //Revealing the guessing number
    document.getElementById("random-number").innerText = randomNumber;
  }

}

//RESETING GAME
const resetGame = document.getElementById("reset-game-btn");
resetGame.addEventListener("click", () => {
  //Resetting the random number
  (randomNumber = Math.floor(Math.random() * (20 - 1 + 1)) + 1);

  //Guessing number resetting to initial value (?)
  document.getElementById("random-number").innerText = "?";

  //Input Value Empty Value
  document.getElementById("number-input").value = "";

  //Enabling the input after the again btn is clicked
  document.getElementById("number-input").disabled = false;

  //Enabling the button after the again btn is clicked
  checkBtn.disabled = false;
  checkBtn.classList.remove("disable");

  //Changing the background color when number guessed right
  document.body.style.backgroundColor = "#222222";

  //Reset the message to the initial value
  message.innerText = "Start Guessing";

  scoreRemaining.innerText = Number("20");

  guessedCount = 0;
});
