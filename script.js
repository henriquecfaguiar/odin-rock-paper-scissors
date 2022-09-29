const buttons = document.querySelectorAll(".button");
const userElem = document.querySelector(".user-scr");
const computerElem = document.querySelector(".computer-scr");
const result = document.querySelector(".result");
const mainContainer = document.querySelector("main");
const choicesArr = ["rock", "paper", "scissors"];
let computerSelection;
let playerSelection;
let computerScore = 0;
let userScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", playRound, true);
});

function playRound(e, computerSelection) {
  playerSelection = e.target.parentElement.classList[0];
  console.log(playerSelection);
  computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    result.textContent = "It's a tie."
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
    computerElem.textContent = `Computer: ${computerScore}`;
    result.textContent = `${capitalize(computerSelection)} beats ${capitalize(playerSelection)}. You lose!`;
  } else {
    userScore++;
    userElem.textContent = `Player: ${userScore}`;
    result.textContent = `${capitalize(playerSelection)} beats ${capitalize(computerSelection)}. You win!`;
  }

  if (userScore === 5 || computerScore === 5) {
    declareWinner(playerSelection, computerSelection);
  };
};

function getComputerChoice() {
  return choicesArr[Math.floor(Math.random() * choicesArr.length)];
};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

function declareWinner(playerSelection, computerSelection) {
  if (userScore === 5) {
    result.textContent = `${capitalize(playerSelection)} beats ${capitalize(computerSelection)}. Congratulations! You're the ultimate winner!`;
    disableClick();
    disPlayAgain();
  } else {
    result.textContent = `${capitalize(computerSelection)} beats ${capitalize(playerSelection)}. I'm sorry. The computer is too strong for you.`;
    disableClick();
    disPlayAgain();
  }
};

function disableClick() {
  buttons.forEach((button) => {
    button.removeEventListener("click", playRound, true);
  })
};

function disPlayAgain() {
  const playAgainBtn = document.createElement("button");
  playAgainBtn.textContent = "Play Again";
  playAgainBtn.classList.add("play-again-btn");
  playAgainBtn.addEventListener("click", reset);
  result.appendChild(playAgainBtn);
};

function reset(e) {
  userScore = 0;
  computerScore = 0;
  userElem.textContent = `Player: ${userScore}`;
  computerElem.textContent = `Computer: ${computerScore}`;
  e.target.remove();
  result.textContent = "";
  buttons.forEach((button) => {
    button.addEventListener("click", playRound, true);
  });
};
