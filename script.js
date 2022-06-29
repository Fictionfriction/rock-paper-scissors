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

