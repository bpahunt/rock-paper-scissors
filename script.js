let humanScore = 0
let computerScore = 0

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
    // Compares player and computer selection to determine the winner and increments score
    switch (humanSelection) {
        case "Rock":
            if (computerSelection == "Scissors") {
                humanScore++
                return "You Win! Rock beats Scissors!"
            } else {
                computerScore++
                return "You Lose! Paper beats Rock"
            }
        case "Scissors":
            if (computerSelection == "Paper") {
                humanScore++
                return "You Win! Scissors beats Paper!"
            } else {
                computerScore++
                return "You Lose! Rock beats Scissors"
            }
        case "Paper":
            if (computerSelection == "Rock") {
                humanScore++
                return "You Win! Paper beats Rock!"
            } else {
                computerScore++
                return "You Lose! Scissors beats Paper"
            }
    }
}

// Function to evaluate winner after 5 rounds of the game
function finalScore () {
    if (humanScore > computerScore) {
        return "Game Over - Congratulations! You Win!"
    } else if (computerScore > humanScore) {
        return "Game Over - Sorry! You Lose"
    } else {
        return "Game Over - It's a draw"
    }
}

// Function to play 5 rounds of the game by calling playRound function and provide feedback to player
function playGame () {   
    for (i=1; i <6; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        console.clear()
        console.log("Round " + i + " of 5")
        console.log("Player chooses " + humanSelection)
        console.log("Computer chooses " + computerSelection)
        console.log(playRound(humanSelection, computerSelection))
        console.log("Score: Player = " + humanScore + " Computer = " + computerScore)
    }
    console.log(finalScore())
}

// Calls main function
playGame();