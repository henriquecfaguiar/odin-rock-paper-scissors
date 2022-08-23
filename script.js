const POSSIBLE_CHOICES = ["rock", "paper", "scissors"];
let userScore = 0
let computerScore = 0

function getComputerChoice() {
    return POSSIBLE_CHOICES[Math.floor(Math.random() * POSSIBLE_CHOICES.length)];
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        return "lose";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        return "won";
    } else {
        return "tie";
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Choose rock, paper or scissors.");
        console.log(`Your choice: ${playerSelection}\nComputer's choice: ${computerSelection}`)

        if (playRound(playerSelection.toLowerCase(), computerSelection) === "lose") {
            computerScore++;
        } else if (playRound(playerSelection.toLowerCase(), computerSelection) === "won") {
            userScore++;
        }

        if (i === 4) {
            console.log(`Your final score: ${userScore}\nComputer's final score: ${computerScore}`);
        } else {
            console.log(`Your score: ${userScore}\nComputer's score: ${computerScore}`);
        }
    }

    if (userScore > computerScore) {
        console.log("Congratulations! You won.");
    } else if (userScore < computerScore) {
        console.log("I'm sorry. You lose.");
    } else {
        console.log("It's a tie!");
    }
}

game();