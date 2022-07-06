function computerPlay() {
    const move = Math.floor(Math.random() * 3);
    switch(move) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    winner.textContent = '';
    if (playerSelection === computerSelection) {
        result.textContent = "It's a draw!";
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore++;
            result.textContent = 'You lose! Paper beats rock!';
        }
        else if (computerSelection === 'scissors') {
            playerScore++;
            result.textContent = 'You win! Rock beats scissors!';
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            result.textContent = 'You win! Paper beats rock!';
        }
        else if (computerSelection === 'scissors') {
            computerScore++;
            result.textContent = 'You lose! Scissors beats paper!';
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++;
            result.textContent = 'You lose! Rock beats scissors!';
        }
        else if (computerSelection === 'paper') {
            playerScore++;
            result.textContent = 'You win! Scissors beats paper!';
        }
    }
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    if (playerScore === 5) {
        winner.textContent = "You win!";
        playerScore = 0;
        computerScore = 0;
        pScore.textContent = '';
        cScore.textContent = '';
    }
    if (computerScore === 5) {
        winner.textContent = "Computer wins!";
        playerScore = 0;
        computerScore = 0;
        pScore.textContent = '';
        cScore.textContent = '';
    }

}

let playerScore = 0;
let computerScore = 0;

function determineWin() {
    if (playerScore > computerScore) {
        console.log('You win the game!');
    }
    else if (playerScore < computerScore) {
        console.log('You lose the game!');
    }
    else {
        console.log('The game is a draw!');
    }
}

function playerChoice(e) {
    if (this.classList.value === 'rock') {
        playRound('rock', computerPlay());
    }
    else if (this.classList.value === 'paper') {
        playRound('paper', computerPlay());
    }
    else {
        playRound('scissors', computerPlay());
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playerChoice));
const result = document.querySelector('.result');
const pScore = document.querySelector('.pScore');
const cScore = document.querySelector('.cScore');
const winner = document.querySelector('.winner');
