// Dom Elements
const score = document.querySelector("#score");
const display = document.querySelector("#display");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resetBtn = document.querySelector("#reset");

// Initial Game State
let humanScore = 0;
let computerScore = 0;
let gameOver = false;
const MAX_SCORE = 5;
display.textContent = "Play Game?";
updateScoreDisplay();

// Event listeners
rockBtn.addEventListener("click", () => playGame("Rock"));
paperBtn.addEventListener("click", () => playGame("Paper"));
scissorsBtn.addEventListener("click", () => playGame("Scissors"));
resetBtn.addEventListener("click", resetGame);

// Game Functions

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateScoreDisplay() {
  score.textContent = `Game score: Human: ${humanScore} Computer: ${computerScore}`;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return (display.textContent = "Draw!");
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    humanScore++;
    return (display.textContent = `You Win! ${humanChoice} beats ${computerChoice}.`);
  } else {
    computerScore++;
    return (display.textContent = `You lose! ${computerChoice} beats ${humanChoice}`);
  }
}

function playGame(humanChoice) {
  if (gameOver) return;

  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  updateScoreDisplay();

  if (humanScore === MAX_SCORE || computerScore === MAX_SCORE) {
    gameOver = true;

    if (humanScore === MAX_SCORE) {
      display.textContent = `You Win! :)`;
    } else {
      display.textContent = `You Lose! :(`;
    }
    score.textContent = `Final Score: Human: ${humanScore} Computer: ${computerScore}`;
  }
}

function resetGame() {
  gameOver = false;
  humanScore = 0;
  computerScore = 0;
  display.textContent = "Play Game?";
  updateScoreDisplay();
}