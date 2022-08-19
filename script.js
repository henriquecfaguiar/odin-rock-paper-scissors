const possibleChoices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    const computerChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    console.log(computerChoice);
    return computerChoice;
}