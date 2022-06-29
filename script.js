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
            return 'You lose! Paper beats rock!';
        }
        else if (computerSelection === 'scissors') {
            return 'You win! Rock beats scissors!';
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'You win! Paper beats rock!';
        }
        else if (computerSelection === 'scissors') {
            return 'You lose! Scissors beats paper!';
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You lose! Rock beats scissors!';
        }
        else if (computerSelection === 'paper') {
            return 'You win! Scissors beats paper!';
        }
    }
}

const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
