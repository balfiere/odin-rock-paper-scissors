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

    // Initialize variables to keep track of the computer's and humans's win count
    let humanScore = 0;
    let humanScoreDisplay = document.getElementById("humanScoreDisplay");
    let computerScore = 0;
    let computerScoreDisplay = document.getElementById("computerScoreDisplay");
    let winnerDisplay = document.getElementById("winner");

    // Play a round of rock, paper, scissors between the computer and the human
    function playRound(event) {
    
        // Get the computer's and human's choice of rock, paper, or scissors
        const humanSelection = event.target.id;
        const computerSelection = getComputerChoice(); 
    
        // Compare the computer's and human's choices to see who won; whoever won, add 1 to their score
        if (humanSelection == computerSelection) {
            winnerDisplay.innerHTML = "It's a tie!";
        } else if (humanSelection == "rock" && computerSelection == "scissors") {
            humanScore++;
            humanScoreDisplay.innerHTML = humanScore;
            winnerDisplay.innerHTML = "You win! Rock beats scissors";
        } else if (humanSelection == "rock" && computerSelection == "paper") {
            computerScore++;
            computerScoreDisplay.innerHTML = computerScore;
            winnerDisplay.innerHTML = "You lose! Paper beats rock";
        } else if (humanSelection == "paper" && computerSelection == "rock") {
            humanScore++;
            humanScoreDisplay.innerHTML = humanScore;
            winnerDisplay.innerHTML = "You win! Paper beats rock";
        } else if (humanSelection == "paper" && computerSelection == "scissors") {
            computerScore++;
            computerScoreDisplay.innerHTML = computerScore;
            winnerDisplay.innerHTML = "You lose! Scissors beat paper";
        } else if (humanSelection == "scissors" && computerSelection == "paper") {
            humanScore++;
            humanScoreDisplay.innerHTML = humanScore;
            winnerDisplay.innerHTML = "You win! Scissors beat paper";
        } else if (humanSelection == "scissors" && computerSelection == "rock") {
            computerScore++;
            computerScoreDisplay.innerHTML = computerScore;
            winnerDisplay.innerHTML = "You lose! Rock beats scissors";
        }
    }
    
    let buttons = document.querySelector('#buttons');

    buttons.addEventListener('click', function(event) {
        playRound(event);
        if (humanScore === 5 || computerScore === 5) {

            buttons.querySelectorAll('button').forEach(button => {
                button.disabled = true;
            });

            let finalWinner = document.createElement('p');
            finalWinner.innerHTML = "Game over! ";

            if (humanScore > computerScore) {
                finalWinner.innerHTML += ("You won " + humanScore + " to " + computerScore + " 🥳");
            } else if (computerScore > humanScore) {
                finalWinner.innerHTML += ("You lost " + computerScore + " to " + humanScore + " 😢");
            } else {
                finalWinner.innerHTML += ("It's a tie 🤝");
            }

            winnerDisplay.appendChild(finalWinner);
        }
    });
}

playGame();