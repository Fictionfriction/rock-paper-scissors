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
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore++;
            return 'You lose! Paper beats rock!';
        }
        else if (computerSelection === 'scissors') {
            playerScore++;
            return 'You win! Rock beats scissors!';
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            return 'You win! Paper beats rock!';
        }
        else if (computerSelection === 'scissors') {
            computerScore++;
            return 'You lose! Scissors beats paper!';
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++;
            return 'You lose! Rock beats scissors!';
        }
        else if (computerSelection === 'paper') {
            playerScore++;
            return 'You win! Scissors beats paper!';
        }
    }
}

let playerScore = 0;
let computerScore = 0;

function game() {
    let playerSelection = prompt("Choose your move!");
    console.log(playRound(playerSelection, computerPlay()));
    determineWin();
}

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

console.log(game());
