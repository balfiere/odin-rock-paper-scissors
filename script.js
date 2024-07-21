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

// Play 5 rounds of rock, paper, scissors
function playGame() {
    

    // Print the winner of the game in the console
    if (humanScore > computerScore) {
        console.log("You won " + humanScore + " to " + computerScore + " 🥳");
    } else if (computerScore > humanScore) {
        console.log("You lost " + computerScore + " to " + humanScore + " 😢");
    } else {
        console.log("It's a tie 🤝");
    }
}

// Play a round of rock, paper, scissors between the computer and the human
function playRound(event) {

    // Get the computer's and human's choice of rock, paper, or scissors
    const humanSelection = event.target.id;
    const computerSelection = getComputerChoice();

    // Compare the computer's and human's choices to see who won; whoever won, add 1 to their score
    if (humanSelection == computerSelection) {
        console.log("It's a tie!");
    } else if (humanSelection == "rock" && computerSelection == "scissors") {
        humanScore++;
        console.log("You win! Rock beats scissors");
    } else if (humanSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        console.log("You lose! Paper beats rock");
    } else if (humanSelection == "paper" && computerSelection == "rock") {
        humanScore++;
        console.log("You win! Paper beats rock");
    } else if (humanSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        console.log("You lose! Scissors beat paper");
    } else if (humanSelection == "scissors" && computerSelection == "paper") {
        humanScore++;
        console.log("You win! Scissors beat paper");
    } else if (humanSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        console.log("You lose! Rock beats scissors");
    }
}

// Initialize variables to keep track of the computer's and humans's win count
let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", playRound);
});