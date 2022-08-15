function getComputerChoice(){
    let choises = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.random()* 2;
    return choises[parseInt(randomNumber)]
}
