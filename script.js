// Global variables to count the score
let humanScore = 0;
let computerScore = 0;


// Computer randomly chooses and returns rock, paper or scissors
function getComputerChoice () {

    // Pick a random number between 1, 2, 3
    let x = Math.floor((Math.random() * 3) + 1)

    // Return a stand based on the number
    if (x === 1) {
        return "rock";
    } else if (x === 2) {
        return "paper";
    } else {
        return "scissors"
    }
}


// Return rock, paper or scissors based on user's choice
function getHumanChoice () {
    
    // Prompt the user
    choice = prompt("Rock, Paper or Scissors?").toLowerCase()

    // Return if in the options
    if (choice === "rock" || choice === "paper" || choice == "scissors") {
        return choice
    }
}


// Decides who wins
function playRound (humanChoice, computerChoice) {
    
    // Draw
    if (humanChoice === computerChoice) {
        console.log(`Draw, you both had ${humanChoice}!`)
    }
}
