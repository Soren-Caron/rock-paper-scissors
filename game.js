function getComputerChoice(){
  let num = Math.random();
  if (num < 1/3){
    return 'rock';
  } else if (num < 2/3){
    return 'scissor';
  } else {
    return 'paper';
  }
}


function getHumanChoice(){
  return window.prompt("Rock, Paper or Scissors?");
}

let computerPoints = 0;
let playerPoints = 0;

function playRound(computerMove = getComputerChoice(), humanMove = getHumanChoice()){
  if (computerMove == humanMove){
    alert(`Tie! both picked ${computerMove}`);

  } else if ((computerMove == 'rock' && humanMove == 'paper') || (computerMove == 'paper' && humanMove == 'scissor') || 
  (computerMove == 'scissor' && humanMove == 'rock' )) {
    alert(`You Win! ${humanMove} beats ${computerMove}`)
    playerPoints++;

  } else {
    alert(`You Lose! ${computerMove} beats ${humanMove}`)
    computerPoints++;
  }
}
