console.log("Hello World!")

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}

function playRound(playerSelection, computerSelection){
    
    if (playerSelection == computerSelection){
        return "Tie Game!"

    } else if ((playerSelection == "Rock" && computerSelection == "Scissors") 
    || (playerSelection == "Paper" && computerSelection == "Rock") 
    || (playerSelection == "Scissors" && computerSelection == "Paper")){
        return "You Win! " + playerSelection + " beats " + computerSelection + ".";

    } else {
        return "You Lose! " + computerSelection + " beats " + playerSelection + ".";

    } 

}

// When you work on this next make "or" statements in the if sections of playRound to make it concise as possible
// Also move Tie game scenario up top for faster results


let playerChoice = prompt();
const playerSelection = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
const computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection,computerSelection));