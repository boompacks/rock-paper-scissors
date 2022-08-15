function getComputerChoice(){
    let choises = ["rock", "paper", "scissors"];
    let randomNumber = Math.random()* 2;
    return choises[parseInt(randomNumber)]
}


function playerSelection(){
    let playerChoice = prompt("Make your choice:");
    return playerChoice.toLowerCase()
}


function playRound(){
    let computerChoice = getComputerChoice();
    let playerChoice = playerSelection();
}


playRound();