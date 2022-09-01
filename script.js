const POSSIBLE_CHOICES = ['Rock', 'Paper', 'Scissors'];
let userScore = 0;
let computerScore = 0;
const computerSelection = getComputerChoice();
const buttons = document.querySelectorAll('button');
const resultDiv = document.getElementById('results');
const resultRound = document.createElement('p');
const score = document.createElement('p');
const resultGame = document.createElement('p');

buttons.forEach((button) => {
  button.addEventListener('click', playGame);
});

function getComputerChoice() {
  return POSSIBLE_CHOICES[Math.floor(Math.random() * POSSIBLE_CHOICES.length)];
};

function playGame(e) {
  let playerSelection = e.target.textContent;
  let computerSelection = getComputerChoice();

  if ((playerSelection === 'Rock' && computerSelection === 'Paper') || (playerSelection === 'Paper' && computerSelection === 'Scissors') || (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
    resultRound.textContent = `${computerSelection} beats ${playerSelection}.`;
    computerScore++;
  } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
    resultRound.textContent = `${playerSelection} beats ${computerSelection}.`;
    userScore++;
  } else {
    resultRound.textContent = `Both chose ${playerSelection}.`;
  };

  resultDiv.appendChild(resultRound);

  score.textContent = `Your score: ${userScore}. Computer's score: ${computerScore}.`;
  resultDiv.appendChild(score);

  if (userScore === 5) {
    resultGame.textContent = 'Congratulations! You won!'
    resultDiv.appendChild(resultGame);
  } else if (computerScore === 5) {
    resultGame.textContent = "I'm sorry. You lose."
    resultDiv.appendChild(resultGame);
  };

};
