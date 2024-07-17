// Get the computer's choice of rock, paper, or scissors
function getComputerChoice() {

    // Get a random number between 0 and 1
    let randomNumber = Math.random();
    
    if (randomNumber < 0.33) { // If the number is less than 0.33, return "rock"
        return "rock";
    } else if (randomNumber < 0.66) { // Else if the number is between 0.33 and 0.66, return "paper"
        return "paper";
    } else { // Else, return "scissors"
        return "scissors";
    }
}

// Get the user's choice of rock, paper, or scissors
function getHumanChoice() {
    // Show a prompt to the user to select rock, paper, or scissors
    let userChoice = prompt("Please type rock, paper, or scissors");
    userChoice = userChoice.toLowerCase();

    // Check to make sure user inputted rock, paper, or scissors. If not, prompt again
    while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
        userChoice = prompt("Please type rock, paper, or scissors");
        userChoice = userChoice.toLowerCase();
    }

    return userChoice;
}

// Initialize variables to keep track of the computer's and humans's win count
let humanScore = 0;
let computerScore = 0;

// Play a round of rock, paper, scissors between the computer and the human
function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        console.log("You win! Rock beats scissors");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        console.log("You lose! Paper beats rock");
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        console.log("You win! Paper beats rock");
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        console.log("You lose! Scissors beat paper");
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        console.log("You win! Scissors beat paper");
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        console.log("You lose! Rock beats scissors");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);