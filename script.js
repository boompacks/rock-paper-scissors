function getComputerSelection(){
    let choises = ["rock", "paper", "scissors"];
    let randomNumber = Math.random()* 2.4;
    return choises[parseInt(randomNumber)]
}


function playRound(playerSelection, computerSelection){
    switch (playerSelection){
        case "paper":
            if (computerSelection == "paper"){
                displayResult.textContent = "Tie";
                return "tie"
            }else if (computerSelection == "scissors"){
                displayResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
                return 'lose'
            }else{
                displayResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
                return "win"
            }
        case "rock":
            if (computerSelection == "rock"){
                displayResult.textContent = "Tie";
                return "tie"
            }else if (computerSelection == "paper"){
                displayResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
                return "lose"
            }else{
                displayResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`
                return "win";
            }
        case "scissors":
            if (computerSelection == "rock"){
                displayResult.textContent =`You lose! ${computerSelection} beats ${playerSelection}`;
                return "lose"
            }else if (computerSelection == "paper"){
                displayResult.textContent =`You win! ${playerSelection} beats ${computerSelection}`;
                return "win"
            }else{
                displayResult.textContent = "Tie";
                return `tie`
            }
    }
}


function startGame(){
    let result = playRound(playerSelection, getComputerSelection());
    if (result === 'win') playerScore++;
    if (result === 'lose') computerScore++;

    displayScore.textContent = `Player: ${playerScore} \nComputer: ${computerScore} `;
    if (playerScore === 5 || computerScore === 5){
        result = "The game is over!"
        displayResult.textContent = result;
        playerScore = 0;
        computerScore = 0;
    }
}


const buttons = document.querySelectorAll("button");
const container = document.querySelector("#container");
const displayResult = document.createElement("div");
const displayScore = document.createElement("div");
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let playerSelection = '';
let playerScore = 0;
let computerScore = 0;

container.appendChild(displayResult);
container.appendChild(displayScore);

displayScore.textContent = `Player: ${playerScore} \nComputer: ${computerScore} `;


rock.addEventListener('click', () => {
    playerSelection = 'rock';
});

paper.addEventListener('click', () => {
    playerSelection = 'paper';
});

scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
});


buttons.forEach(button => {
    button.addEventListener('click', startGame)
});


