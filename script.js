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

// compare the player and computer choices together and declare a winner or a draw
function playRound(playerChoice, computerChoice) {
  let message = function (result, playerChoice, computerChoice) {
    console.log(`You ${result}! ${playerChoice} beats ${computerChoice}`);
  }

  if (playerChoice === computerChoice) {
    console.log("It's a draw.");
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    console.log(message("win", playerChoice, computerChoice));
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    console.log(message("win", playerChoice, computerChoice));
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    console.log(message("win", playerChoice, computerChoice));
  } else {
    console.log(message("lose", playerChoice, computerChoice));
  }
}