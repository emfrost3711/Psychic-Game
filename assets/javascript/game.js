console.log("my javaScript is linked")

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
var computerChoice = letters[Math.floor(Math.random() * letters.length)];
var guessesLeft = 10;
var guessesSoFar = [];
var wins = 0;
var losses = 0;

console.log("computerChoice" + computerChoice) 

document.onkeypress = function (event) {
   var userGuess = event.key.toUpperCase();
  if (userGuess === computerChoice) {
      wins++;
      document.getElementById("wins").textContent=wins; 
        console.log("userGuess");
        reset ();
  } else {
      losses++;
      document.getElementById("losses").textContent=losses;
      guessesSoFar.push(userGuess); 
      console.log("guessesSoFar" + guessesSoFar);
      document.getElementById("lettersGuessed").textContent=guessesSoFar;
      console.log("userLost");
    if (guessesLeft===0) {
        reset ();
    }
  }
}

function reset () {
    computerChoice=letters[Math.floor(Math.random() * letters.length)];
    guessesLeft=10;
    guessesSoFar=[]
    console.log("computerChoice" + computerChoice) 
}
