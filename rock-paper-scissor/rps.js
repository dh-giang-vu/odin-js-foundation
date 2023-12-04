let playerScore = 0;
let computerScore = 0;

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
            playerScore += 1;
            return "Player Wins";
    } else {
        computerScore += 1;
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

function playerChoice(event) {
    let btn = event.target;
    let compSel = getComputerChoice();
    cs.textContent = "Computer's selection: " + compSel;
    res.textContent = "Result: " + playRound(btn.textContent, compSel);

    if (playerScore === 5 || computerScore === 5) {
        ps.removeEventListener("click", playerChoice);

        if (playerScore === 5) {
            ann.textContent = "Winner: Player";
        }
        else {
            ann.textContent = "Winner: Computer";
        }
    }
}


const ps = document.querySelector(".ps");
const cs = document.querySelector(".cs");
const res = document.querySelector(".result");
const ann = document.querySelector(".ann");

ps.addEventListener("click", playerChoice);

