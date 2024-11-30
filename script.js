playGame();

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
    } else {
        return getHumanChoice()
    }
}


// Plays the entire game
function playGame () {

    // Variables to count the score
    let humanScore = 0;
    let computerScore = 0;

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log(`${humanScore} : ${computerScore}`)
    // Decides the overall winner and quit
    if (humanScore > computerScore) {
        console.log("You've won!");
        return
    } else if (humanScore < computerScore) {
        console.log("You've lost!");
        return
    } else {
        console.log("It was a draw!");
        return
    }


    // Decides who wins
    function playRound (humanChoice, computerChoice) {
        
        // Draw
        if (humanChoice === computerChoice) {
            console.log(`Draw! You both had ${humanChoice}.`);
        }
        // Computer wins
        else if ((humanChoice === "rock" && computerChoice === "paper") || 
            (humanChoice === "paper" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "rock")) {
            
            // Change score
            computerScore += 1;
            console.log(`You lost! Because ${computerChoice} beats ${humanChoice}.`);
        }
        // Human wins 
        else {
            // Change score
            humanScore += 1;
            console.log(`You won! Because ${humanChoice} beats ${computerChoice}.`);
        }
    }
}