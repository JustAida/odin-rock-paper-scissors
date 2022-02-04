const ROCK = 'ROCK'
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'
let playerScores = 0;
let computerScores = 0;

// Create a fucntion to make the computer choose 'Rock', 'Paper', or 'Scissors' randomly.
function computerPlay() {
  const CHOICES = [ROCK, PAPER, SCISSORS];
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

// Create a function to decide the winner.
function playRound(playerSelection, computerSelection) {

  // Make the parameters case-insensitive so the user can input any variation.
  playerSelection = playerSelection.toUpperCase()

  // Decide the winner and return the message.
  if (playerSelection === ROCK && computerSelection === PAPER) {
    computerScores += 1;
    return 'You lose! Paper beats Rock';

  } else if (playerSelection === ROCK && computerSelection === SCISSORS) {
    playerScores += 1;
    return 'You win! Rock beats Scissors';

  } else if (playerSelection === PAPER && computerSelection === ROCK) {
    playerScores += 1;
    return 'You win! Paper beats Rock';

  } else if (playerSelection === PAPER && computerSelection === SCISSORS) {
    computerScores += 1;
    return 'You lose! Scissors beat Paper';

  } else if (playerSelection === SCISSORS && computerSelection === ROCK) {
    computerScores += 1;
    return 'You lose! Rock beats Scissors';

  } else if (playerSelection === SCISSORS && computerSelection === PAPER) {
    playerScores += 1;
    return 'You win! Scissors beat Paper';

  } else {
    return 'It\'s a tie!';
  }
}

// Create a function that will loop the game 5 times and keep scores.
function game() {
  for (let i = 0; i < 5; i++) {
    
    // Get the player input.
    let checkInput = true;
    let playerSelection;

    // Check validity of the user input and will loop until the input is valid.
    while (checkInput) {
      playerSelection = prompt('Rock, Paper, or Scissors?');
      if (
        playerSelection.toUpperCase() === ROCK || 
        playerSelection.toUpperCase() === PAPER ||
        playerSelection.toUpperCase() === SCISSORS
        ) {
          checkInput = false;
        } else {
          alert('Type only "Rock", "Paper", or "Scissors"');
        }
    }

    // Get the computer input.
    const computerSelection = computerPlay();

    // Declare the winner and current scores of each round.
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Player scores: ${playerScores}\nComputer scores: ${computerScores}`);
  }

  // Declare the winner at the end of the game.
  if (playerScores > computerScores) {
    console.log('You win!');

  } else if (playerScores < computerScores) {
    console.log('You lose!');

  } else {
    console.log('It\'s a tie!');
  }
  playerScores = 0;
  computerScores = 0;
}

// Run the game.
game()