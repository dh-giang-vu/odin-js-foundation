function getComputerChoice() {
    let rand = Math.random()*3;
    if (rand < 1) {
        return "Rock";
    } else if (rand < 2) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.localeCompare(computerSelection) == 0) {
        return "Draw";
    } else if ((playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissor" && computerSelection == "Paper") || 
        (playerSelection == "Rock" && computerSelection == "Scissor")) {
        return "Player Wins";
    } else {
        return "Player Lost";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter Player Selection: ");
        let computerSelection = getComputerChoice();
        console.log(playerSelection + " " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}