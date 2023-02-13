//Get Computers Choice for Rock, Paper or Scissors:

const getComputerChoice = function() {
    let computerChoice;
    const numberPicked = Math.floor(Math.random() * 3);
    if (numberPicked === 0) {
        computerChoice = "rock";
    } else if (numberPicked === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    };
    return computerChoice;
};

function playRound(playerSelection, computerSelection) {
    //if (playerSelection == "rock" && (computerSelection !== "rock" && computerSelection !== "paper")) {
    //    return `You win! ${playerSelection} beats ${computerSelection}`;
    //} else if (playerSelection == "rock" && (computerSelection == "rock")) {
    //    return `Nobody wins! ${playerSelection} vs. ${computerSelection}`;
    //} else if (playerSelection == "rock" && (computerSelection == "paper")) {
    //    return `You lose! ${playerSelection} loses to ${computerSelection}`;
    //}
    switch (playerSelection) {
        case 'rock':
            if (computerSelection == "paper") {
                return `You lose! ${playerSelection} loses to ${computerSelection}`;
            } else if (computerSelection == "rock") {
                return `Nobody wins! ${playerSelection} vs. ${computerSelection}`;
            } else {
                return `You win! ${playerSelection} beats ${computerSelection}`;
            }
            break;
        case 'paper':
            if (computerSelection == "scissors") {
                return `You lose! ${playerSelection} loses to ${computerSelection}`;
            } else if (computerSelection == "paper") {
                return `Nobody wins! ${playerSelection} vs. ${computerSelection}`;
            } else {
                return `You win! ${playerSelection} beats ${computerSelection}`;
            }
            break;
        case 'scissors':
            if (computerSelection == "rock") {
                return `You lose! ${playerSelection} loses to ${computerSelection}`;
            } else if (computerSelection == "scissors") {
                return `Nobody wins! ${playerSelection} vs. ${computerSelection}`;
            } else {
                return `You win! ${playerSelection} beats ${computerSelection}`;
            }
            break;  
    }
}

const getPlayersChoice = function() {
    const playerChoice = prompt("What is your pick? Rock, Paper or Scissors?");
    const choiceToSmall = playerChoice.toLowerCase();

    //Check if the answer is valid.
    //if (choiceToSmall !== "rock" || choiceToSmall !== "scissors" || choiceToSmall !== "paper") {
    //};

    return choiceToSmall;
}



const playerSelection = getPlayersChoice();
const computerSelection = getComputerChoice();

 
console.log(playRound(playerSelection, computerSelection));