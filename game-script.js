console.log("Hello World!")

//const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}


console.log(getComputerChoice())