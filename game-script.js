console.log("Hello World!")

let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}

function playRound() {

    let playerChoice = prompt();
    const playerSelection = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    const computerSelection = getComputerChoice();

    if (playerSelection == computerSelection) {
        return "Tie Game!"

    } else if ((playerSelection == "Rock" && computerSelection == "Scissors")
        || (playerSelection == "Paper" && computerSelection == "Rock")
        || (playerSelection == "Scissors" && computerSelection == "Paper")) {
        userScore++;
        return "You Win! " + playerSelection + " beats " + computerSelection + ".";

    } else {
        computerScore++;
        return "You Lose! " + computerSelection + " beats " + playerSelection + ".";

    }

}



function game () {

    console.log(playRound());
    if (userScore < 5 && computerScore < 5){
        game();
    } else {
        endGame();
    }
}


function endGame(){
    if (userScore > computerScore) {
        console.log("You Win! :)");
    } else {
        console.log("You Lose! :(")
    }
}