const buttons = document.querySelectorAll("button");
for(button of buttons){
    button.addEventListener('click', startGame);
}


function getComputerSelection(){
    let choises = ["rock", "paper", "scissors"];
    let randomNumber = Math.random()* 2;
    return choises[parseInt(randomNumber)]
}


function getPlayerSelection(){
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');

    paper.addEventListener('click', () =>{
        return 'paper'
    });

    rock.addEventListener('click', () =>{
        return 'rock'
    });

    scissors.addEventListener('click', () =>{
        return 'scissors'
    });
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
    let result = playRound(getPlayerSelection(), getComputerSelection());
    console.log(result)
}
