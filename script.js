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