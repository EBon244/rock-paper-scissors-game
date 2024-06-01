/* TODO Come back at a later point when more knowledge is acquired and re-work this code
*/



console.log("Hello World!")

let userScore = 0;
let computerScore = 0;
let startGame = document.getElementById("start");
let scoreDisplay = document.getElementById("scoreDisplay"); // displays winner of recent round played
let currentScore = document.getElementById("currentScore"); // displays running scoring so far
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => { // button function to choose option for each round
    button.addEventListener("click", () => {

        if (button.id.includes("rock")) {
            console.log(scoreDisplay.textContent = playRound("Rock"));
            game();
        } else if (button.id.includes("paper")) {
            console.log(scoreDisplay.textContent = playRound("Paper"));
            game();
        } else if (button.id.includes("scissors")) {
            console.log(scoreDisplay.textContent = playRound("Scissors"));
            game();
        } else { 
            userScore = 0;
            computerScore = 0;
            displayScore();
        }

    });
});

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}

// function getPlayerChoice(){
//     let playerChoice = prompt();
//     return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
// }

function playRound(choice) {

    const playerSelection = choice;
    const computerSelection = getComputerChoice();

    if (playerSelection == computerSelection) {
        return "Tie Game!";

    } else if ((playerSelection == "Rock" && computerSelection == "Scissors")
        || (playerSelection == "Paper" && computerSelection == "Rock")
        || (playerSelection == "Scissors" && computerSelection == "Paper")) {
        userScore++; // attempt to return score? 
        return "You Win! " + playerSelection + " beats " + computerSelection + ".";

    } else {
        computerScore++;
        return "You Lose! " + computerSelection + " beats " + playerSelection + ".";

    }

}

function displayScore() {
    currentScore.textContent = "Current score is: User = " + userScore + " Computer = " + computerScore;
    
}

function game() {

    if (userScore < 5 && computerScore < 5) {
        displayScore();
    } else {
        endGame();
    }
}


function endGame() {
    if (userScore > computerScore) {
        console.log(currentScore.textContent = "You Win! :) Final Score: User = 5 Computer = " + computerScore);
    } else {
        console.log(currentScore.textContent = "You Lose! :( Final Score: User = " + userScore + " Computer = 5");
    }
}