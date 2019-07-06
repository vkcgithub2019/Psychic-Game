//Array of possible computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//tracking player's wins, losses, & guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var computerGuess = [];


//computer's selected letter
window.onload = function() {
	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}


//Game loop
document.onkeyup = function(event) {
	var playerGuess = event.key;
	if (playerGuess==="Shift" || playerGuess==="Enter"){
		alert("not a valid key")
	};
	lettersGuessed.push(playerGuess);
	console.log(computerGuess[0]);

//correct guess
if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
	wins++;
	guessesLeft = 10;
	lettersGuessed.length = 0;
	computerGuess.length = 0;
	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}

//incorrect guess
else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
	guessesLeft = guessesLeft-1;
}

else {
	losses++;
	guessesLeft = 10;
	lettersGuessed.length = 0;
	computerGuess.length = 0;
	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}

var html = "<p>Guess what letter I'm thinking of!</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses left: " + guessesLeft + "</p>" +
          "<p>Your guesses so far: " + lettersGuessed + "</p>";
 
document.querySelector("#game").innerHTML = html;

}