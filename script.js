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
    switch (playerSelection) {
        case 'rock':
            if (computerSelection == "paper") {
                return `You lose! ${playerSelection} loses to ${computerSelection}`;
            } else if (computerSelection == "rock") {
                return `It's a tie! ${playerSelection} vs. ${computerSelection}`;
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


function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayersChoice();
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);
        console.log(`Round ${i+1}:`)
        console.log(roundResult);  
        if (roundResult.includes("You win!")) {
            ++playerScore;
            console.log(`Score: Player: ${playerScore} : ${computerScore} Computer`);
        } else if (roundResult.includes("You lose!")) {
            ++computerScore;
            console.log(`Score: Player: ${playerScore} : ${computerScore} Computer`);
        } else {
            console.log(`Score: Player: ${playerScore} : ${computerScore} Computer`);
        }  
        console.log("********************************")    
    }
    
    //Check winner
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore == computerScore) {
        console.log("The game is a tie!");
    } else {
        console.log("Computer wins the game!");
    }
}


//const playerSelection = getPlayersChoice();
//const computerSelection = getComputerChoice();

console.log(game()); 

//console.log(playRound(playerSelection, computerSelection));