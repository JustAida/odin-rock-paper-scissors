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

// Display scores.
const scores = document.querySelectorAll('#scores div');
function displayScores(scores) {
  scores.forEach(score => {
    if (score.classList.value === 'player-scores') {
      score.textContent = `Player scores: ${playerScores}`;
    } else {
      score.textContent = `Computer scores: ${computerScores}`;
    }
  });
}
displayScores(scores);

// Check winner.
function checkWinner(playerScores, computerScores) {
  if (playerScores === 5) return "The player wins!";
  else if (computerScores === 5) return "The player loses!";
  else return "";
}

const body = document.querySelector('body');
const div = document.createElement('div');
const buttonsContainer = document.querySelector('#buttons-container')

const buttons = document.querySelectorAll('button');
// Initiate the game.
buttons.forEach(button => {
  button.addEventListener('click', e => {
    div.textContent = playRound(e.target.textContent, computerPlay());
    displayScores(scores);
    winner = checkWinner(playerScores, computerScores);
    if (winner) {
      div.textContent = winner;
      displayScores(scores);
      playerScores = 0;
      computerScores = 0;
    };
  })
})

body.insertBefore(div, buttonsContainer);

