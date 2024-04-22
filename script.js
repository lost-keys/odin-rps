const CHOICES = ["rock", "paper", "scissors"];

// Get a random int up to a max int (starting at 0)
function getRandomInt(maxInt) {
  return Math.floor(Math.random() * maxInt);
}
// Ask player for their choice of rock, paper or scissors.
// Capture player choice in playerChoice variable
// Calculate computer choice
function getComputerChoice() {
  return CHOICES[getRandomInt(CHOICES.length)];
}
  
// Capture computer choice in computerChoice variable
// Compare playerChoice to computerChoice
// If playerChoice is "rock" and computerChoice is "scissors" player wins
// If playerChoice is "paper" and computerChoice is "rock" player wins
// If playerChoice is "scissors" and computerChoice is "paper" player wins
// If playerChoice is "rock" and computerChoice is "paper" player loses
// If playerChoice is "paper" and computerChoice is "scissors" player loses
// If playerChoice is "scissors" and computerChoice is "rock" player loses
// Else, game is a draw