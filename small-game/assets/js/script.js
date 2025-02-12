let choices = ['rock', 'paper', 'scissor'];
let wins = 0;
let losses = 0;
let ties = 0;

function playGame(userChoice) {
    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];

    const computerChoiceElement = document.querySelector('#computerChoice');
    const resultTextElement = document.querySelector('#resultText');
    const winsElement = document.querySelector('#wins');
    const lossesElement = document.querySelector('#losses');
    const tiesElement = document.querySelector('#ties');
    // e5tiar el computer
    computerChoiceElement.innerText = computerChoice;
    //result text lel ta
    let resultText;

    if (computerChoice === userChoice) {
        resultText = "It's a tie!";
        ties++;
    } else if (userChoice === 'rock' && computerChoice === 'scissor') {
        resultText = "You won!";
        wins++; 
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        resultText = "You won!";
        wins++;
    } else if (userChoice === 'scissor' && computerChoice === 'paper') {
        resultText = "You won!";
        wins++;
    } else if (userChoice === 'shoot') {
        resultText = "You won!";
        wins++;
    } else if (computerChoice === 'rock' && userChoice === 'scissor') {
        resultText = "You lost!";
        losses++;
    } else if (computerChoice === 'paper' && userChoice === 'rock') {
        resultText = "You lost!";
        losses++;
    } else if (computerChoice === 'scissor' && userChoice === 'paper') {
        resultText = "You lost!";
        losses++;
    } else {
        resultText = "Invalid choice!";
    }
    // This is a score element WoW
    resultTextElement.innerText = resultText;
    winsElement.innerText = wins;
    lossesElement.innerText = losses;
    tiesElement.innerText = ties;
}
