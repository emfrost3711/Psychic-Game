console.log("my javaScript is linked")

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
var computerChoice = letters[Math.floor(Math.random() * letters.length)];
var remainingGuesses = 9;
var guessesSoFar = [];
var wins = 0;
var losses = 0;

console.log("computerChoice" + computerChoice) 

document.onkeypress = function (event) {
   var userGuess = event.key.toUpperCase();
  if (userGuess === computerChoice) {
      wins++;
      document.getElementById("wins").textContent=wins; 
        reset ();
  } else {
      document.getElementById("remainingGuesses").textContent=remainingGuesses;
      guessesSoFar.push(userGuess); 
      remainingGuesses--;
      document.getElementById("lettersGuessed").textContent=guessesSoFar;
  }if (remainingGuesses===0) {
      losses++;
      document.getElementById("losses").textContent=losses;
      reset ();
    }
  }

function reset () {
    computerChoice=letters[Math.floor(Math.random() * letters.length)];
    remainingGuesses=9;
    guessesSoFar=[]
    console.log("computerChoice" + computerChoice) 
}
