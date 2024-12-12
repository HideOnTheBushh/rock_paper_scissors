const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector(".results");

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});


// Variables to count the score
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
    } else {
        return getHumanChoice()
    }
}

// Decides who wins
function playRound (humanChoice, computerChoice) {

    const p = document.createElement("p");
        
    // Draw
    if (humanChoice === computerChoice) {
        p.textContent = `Draw! You both had ${humanChoice}.`;
    }
    // Computer wins
    else if ((humanChoice === "rock" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")) {
        
        // Change score
        computerScore += 1;
        p.textContent = `You lost! Because ${computerChoice} beats ${humanChoice}.`;
    }
    // Human wins 
    else {
        // Change score
        humanScore += 1;
        p.textContent = `You won! Because ${humanChoice} beats ${computerChoice}.`;
    }
    p.innerHTML += `<br> ${humanScore} : ${computerScore}`;
    results.appendChild(p);
    prompResult();
}


// Prompts result
function prompResult () {

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


    
}