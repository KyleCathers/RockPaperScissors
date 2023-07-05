let compScore = 0;
let humanScore = 0;

// returns a random answer of either rock, paper, or scissors
function getComputerChoice() {
    const max = 3; // 3 choices
    let number = Math.floor(Math.random() * max); // 0, 1, 2
    if (number == 0) {
        return 'rock';
    } else if (number == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getPlayerChoice() {
    // read input from human
    let playerSelection = prompt("Enter in your choice of rock, paper, or scissors");
    playerSelection = playerSelection.toLowerCase(); // remove case sensitivity

    while ((playerSelection != 'rock') && (playerSelection != 'paper') && (playerSelection != 'scissors')) {
        alert("incorrect input, try again");
        playerSelection = prompt("Enter in your choice of rock, paper, or scissors");
        playerSelection = playerSelection.toLowerCase(); // remove case sensitivity
    }

    return playerSelection;
}

// plays 1 round taking in the players choice and the computers choice
function playRound(playerSelection, computerSelection) {
    let winner;

    // rock > scissors
    // scissors > paper
    // paper > rock

    // compare inputs
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            winner = 'The round is a draw!';
            compScore += 0.5;
            humanScore += 0.5;
        } else if (computerSelection == 'paper') {
            winner = 'You lose! Paper beats rock';
            compScore++;
        } else if (computerSelection == 'scissors') {
            winner = 'You win! Paper beats scissors';
            humanScore++;
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            winner = 'You win! Paper beats rock';
            humanScore++;
        } else if (computerSelection == 'paper') {
            winner = 'The round is a draw!';
            compScore += 0.5;
            humanScore += 0.5;
        } else if (computerSelection == 'scissors') {
            winner = 'You lose! Scissors beats paper';
            compScore++;
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            winner = 'You lose! Rock beats scissors';
            compScore++;
        } else if (computerSelection == 'paper') {
            winner = 'You win! Scissors beats paper';
            humanScore++;
        } else if (computerSelection == 'scissors') {
            winner = 'The round is a draw!';
            compScore += 0.5;
            humanScore += 0.5;
        }
    } 

    return winner;
}

// plays a 5 round game
function game() {

    for (let i = 0; i < 5; i++) {
        let winner = playRound(getPlayerChoice(), getComputerChoice());
        alert(winner);
    }

    if (humanScore > compScore) {
        alert ('You win! The score is ' + humanScore + '-' + compScore);
    } else if (humanScore < compScore) {
        alert ('You lose! The score is ' + humanScore + '-' + compScore);
    } else {
        alert ('Draw! The score is ' + humanScore + '-' + compScore);
    }
}

game();