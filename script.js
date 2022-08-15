function getComputerChoice(){
    let choises = ["rock", "paper", "scissors"];
    let randomNumber = Math.random()* 2;
    return choises[parseInt(randomNumber)]
}

/*
function playerSelection(){
    let playerChoice = prompt("Make your choice:");
    return playerChoice.toLowerCase()
}
*/

function playRound(playerSelection, computerSelection){
    if (computerSelection == "rock"){
        return "Tie"
    }else if (computerSelection == "paper"){
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }else{
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
const result = playRound(playerSelection, computerSelection);