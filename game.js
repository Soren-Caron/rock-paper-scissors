// Generates a random choice for the computer: 'rock', 'paper', or 'scissor'
function getComputerChoice() {
  let num = Math.random(); // Generate a random number between 0 and 1
  if (num < 1 / 3) {
    return 'rock'; // Assign 'rock' if the number is in the first third
  } else if (num < 2 / 3) {
    return 'scissor'; // Assign 'scissor' if the number is in the second third
  } else {
    return 'paper'; // Assign 'paper' if the number is in the final third
  }
}

// Prompts the player for their choice: 'Rock', 'Paper', or 'Scissors'
function getHumanChoice() {
  return window.prompt("Rock, Paper or Scissors?");
}

// Initialize scores for computer and player
let computerPoints = 0;
let playerPoints = 0;

// Plays a single round of Rock-Paper-Scissors
function playRound(computerMove = getComputerChoice(), humanMove = getHumanChoice()) {
  // Check for a tie
  if (computerMove == humanMove) {
    alert(`Tie! Both picked ${computerMove}`);

  // Check if the player wins the round
  } else if (
    (computerMove == 'rock' && humanMove == 'paper') || 
    (computerMove == 'paper' && humanMove == 'scissor') || 
    (computerMove == 'scissor' && humanMove == 'rock')
  ) {
    alert(`You Win! ${humanMove} beats ${computerMove}`);
    playerPoints++; // Increment player's score

  // Otherwise, the computer wins the round
  } else {
    alert(`You Lose! ${computerMove} beats ${humanMove}`);
    computerPoints++; // Increment computer's score
  }
}
