//Get Computers Choice for Rock, Paper or Scissors:

const getComputerChoice = function() {
    let computerChoice;
    const numberPicked = Math.floor(Math.random() * 3);
    if (numberPicked === 0) {
        computerChoice = "Rock";
    } else if (numberPicked === 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
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
//const computerSelection = getComputerChoice();
const computerSelection = "scissors";
 
console.log(playRound(playerSelection, computerSelection));