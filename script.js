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

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?")
    if (humanChoice.toUpperCase() == "ROCK") {
        return "Rock"
    }   else if (humanChoice.toUpperCase() == "PAPER") {
        return "Paper" 
    }   else if (humanChoice.toUpperCase() == "SCISSORS") {
        return "Scissors"
    }   else {
        return "Error"
    }
    return humanChoice
}

console.log("Player chooses " + getHumanChoice())
console.log("Computer chooses " + getComputerChoice())
