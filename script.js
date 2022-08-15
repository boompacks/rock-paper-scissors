function getComputerSelection(){
    let choises = ["rock", "paper", "scissors"];
    let randomNumber = Math.random()* 2;
    return choises[parseInt(randomNumber)]
}


function getPlayerSelection(){
    let playerChoice = prompt("Make your choice:");
    return playerChoice.toLowerCase()
}


function playRound(playerSelection, computerSelection){
    switch (playerSelection){
        case "paper":
            if (computerSelection == "paper"){
                return "Tie"
            }else if (computerSelection == "scissors"){
                return `You lose! ${computerSelection} beats ${playerSelection}`
            }else{
                return `You win! ${playerSelection} beats ${computerSelection}`
            }
        case "rock":
            if (computerSelection == "rock"){
                return "Tie"
            }else if (computerSelection == "paper"){
                return `You lose! ${computerSelection} beats ${playerSelection}`
            }else{
                return `You win! ${playerSelection} beats ${computerSelection}`
            }
        case "scissors":
            if (computerSelection == "rock"){
                return `You lose! ${computerSelection} beats ${playerSelection}`
            }else if (computerSelection == "paper"){
                return `You win! ${playerSelection} beats ${computerSelection}`
            }else{
                return `Tie`
            }
    }
}


function game(){
    for (let i=0; i<5; i++){
        let result = playRound(getPlayerSelection(), getComputerSelection());
        console.log(result)
    }
}

game();