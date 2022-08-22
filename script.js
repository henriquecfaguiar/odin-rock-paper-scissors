const possibleChoices = ["rock", "paper", "scissors"];
const playerSelection = prompt("Choose rock, paper or scissors.");
const computerSelection = getComputerChoice();

function getComputerChoice() {
    return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];;
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log(`You won! ${playerSelection} beats ${computerSelection}.`);
    } else if (playerSelection === computerSelection) {
        console.log("It's a tie!")
    } else {
        console.log("Make sure to enter rock, paper or scissors.")
    }
}

console.log(`Player's choice: ${playerSelection}\nComputer's choice: ${computerSelection}`)
console.log(playRound(playerSelection.toLowerCase(), computerSelection));