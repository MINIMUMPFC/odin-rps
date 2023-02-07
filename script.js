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
    console.log(computerChoice);
    return computerChoice;
};

getComputerChoice();