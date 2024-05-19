let humanScore = 0
let computerScore = 0
const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

// Function to generate random choice for the computer of "Rock", "Paper" or "Scissors"
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return "Rock";
    } else if (computerChoice == 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

// Function to prompt user for input of "Rock", "Paper" or "Scissors"
function getHumanChoice() {
    let humanChoice
    // Loop until valid input is received
    while (true) {
        humanChoice = prompt("Rock, Paper or Scissors?")
        // Check for null input (e.g. if cancel button is pressed)
        if (humanChoice == null) {
            continue
        }
        // Check if input matches an expected value, ignores case sensitivity
        if (humanChoice.toUpperCase() == "ROCK") {
            return "Rock"
        } else if (humanChoice.toUpperCase() == "PAPER") {
            return "Paper" 
        } else if (humanChoice.toUpperCase() == "SCISSORS") {
            return "Scissors"
        }   
    }
}

// Function to play a single round of the game
function playRound(humanSelection, computerSelection) {
    // Check for a draw first
    if (humanSelection == computerSelection) {
        return "Draw!"
    }
    // Compares player and computer selection to determin the winner
    switch (humanSelection) {
        case "Rock":
            if (computerSelection == "Scissors") {
                return "You Win! Rock beats Scissors!"
        } else {
                return "You Lose! Paper beats Rock"
            }
        case "Scissors":
            if (computerSelection == "Paper") {
                return "You Win! Scissors beats Paper!"
        } else {
                return "You Lose! Rock beats Scissors"
            }
        case "Paper":
            if (computerSelection == "Rock") {
                return "You Win! Paper beats Rock!"
        } else {
                return "You Lose! Scissors beats Paper"
            }
    }
}

// Log player and computer choices to console
console.log("Player chooses " + humanSelection)
console.log("Computer chooses " + computerSelection)
console.log(playRound(humanSelection, computerSelection))

