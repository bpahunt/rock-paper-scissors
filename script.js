// Function to generate random choice for the computer of "Rock", "Paper" or "Scissors"
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return "Rock";
    }   else if (computerChoice == 1) {
        return "Paper"
    }   else {
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
        }   else if (humanChoice.toUpperCase() == "PAPER") {
            return "Paper" 
        }   else if (humanChoice.toUpperCase() == "SCISSORS") {
            return "Scissors"
        }   
    }
}

// Log player and computer choices to console
console.log("Player chooses " + getHumanChoice())
console.log("Computer chooses " + getComputerChoice())
