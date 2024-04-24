// Ask player for their choice of rock, paper or scissors.
// Capture player choice in playerChoice variable
// Calculate computer choice
// Capture computer choice in computerChoice variable
// Compare playerChoice to computerChoice
// If playerChoice is "rock" and computerChoice is "scissors" player wins
// If playerChoice is "paper" and computerChoice is "rock" player wins
// If playerChoice is "scissors" and computerChoice is "paper" player wins
// If playerChoice is "rock" and computerChoice is "paper" player loses
// If playerChoice is "paper" and computerChoice is "scissors" player loses
// If playerChoice is "scissors" and computerChoice is "rock" player loses
// Else, game is a draw

const CHOICES = ["rock", "paper", "scissors"];
playerScore = 0;
computerScore = 0;

// Get a random int up to a max int (starting at 0)
function getRandomInt(maxInt) {
  return Math.floor(Math.random() * maxInt);
}

// gets a random element from the CHOICES array
function getComputerChoice() {
  return CHOICES[getRandomInt(CHOICES.length)];
}
  
// ask the player for their choice, returns the player's choice. Repeats until
// a valid choice is entered
function getPlayerChoice() {
  let choice ="";
  message = `[Rock, Paper, Scissors] Please enter your choice: `

  while (!validChoice(choice)) {
    choice = prompt(message);
  }

  return choice;
}

function validChoice(string) {
  return CHOICES.includes(string.toLowerCase())
}

// compare the player and computer choices and return the result (win, lose, draw)
function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "draw";
  } else if (
    playerChoice === "rock" && computerChoice === "scissors" ||
    playerChoice === "paper" && computerChoice === "rock" ||
    playerChoice === "scissors" && computerChoice === "paper"
  ){
    return `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    return `You lose! ${computerChoice} beats ${playerChoice}.`;
  }
}

// adjust scores based on whether the player won or lost the round.
function adjustScores(roundResult) {
  if (roundResult.includes("draw")) {
    return;
  } else if (roundResult.includes("win")) {
    playerScore += 1;
  } else {
    computerScore += 1;
  }
}

// compare player scores and return the winner
function getResults() {
  if (playerScore > computerScore) {
    return "player";
  } else if (computerScore > playerScore) {
    return "computer";
  } else {
    return "draw";
  }
}

// display the final game results (win lose or draw), prints the final score
function showGameResults() {
  result = getResults()

  switch(result) {
    case "player":
      console.log(`You win!!! [player: ${playerScore} || computer: ${computerScore}]`);
      break;
    case "computer":
      console.log(`You lose... [player: ${playerScore} || computer: ${computerScore}]`);
      break;
    default:
      console.log(`It's a draw... [player: ${playerScore} || computer: ${computerScore}]`);
      break;
  }
}

function playGame(rounds = 5) {
  for(let i = 0; i < rounds; i++) {
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
    let roundResult = playRound(playerChoice, computerChoice);
    console.log(roundResult);
    adjustScores(roundResult);
  }

  showGameResults();
}