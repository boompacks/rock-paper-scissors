function getComputerSelection(){
    let choises = ["rock", "paper", "scissors"];
    let randomNumber = Math.random()* 2.4;
    return choises[parseInt(randomNumber)]
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


function startGame(){
    let result = playRound(playerSelection, getComputerSelection());
    console.log(result)
}


const buttons = document.querySelectorAll("button");
const container = document.querySelector("#container");
const result = document.createElement("div");
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let playerSelection = '';


rock.addEventListener('click', () => {
    playerSelection = 'rock';
});

paper.addEventListener('click', () => {
    playerSelection = 'paper';
});

scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
});

for(button of buttons){
    button.addEventListener('click', startGame);
}


result.textContent = "0-0";
container.appendChild(result);
