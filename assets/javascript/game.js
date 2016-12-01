var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var guesses = [];

var wins = 0;

var losses = 0; 

var guessesleft = 12;

document.onkeyup = function (event) {

	var userGuess = event.key;

	var computerGuess = letters[Math.floor(Math.random() * letters.length)];

	if ((userGuess = "a") || (userGuess = "b") || (userGuess = "c") || (userGuess = "d") || (userGuess = "e") || (userGuess = "f") || (userGuess = "g") || (userGuess = "h") || (userGuess = "i") || (userGuess = "j") || (userGuess = "k") || (userGuess = "l") || (userGuess = "m") || (userGuess = "n") || (userGuess = "o") || (userGuess = "p") || (userGuess = "q") || (userGuess = "r") || (userGuess = "s") || (userGuess = "t") || (userGuess = "u") || (userGuess = "v") || (userGuess = "w") || (userGuess = "x") || (userGuess = "y") || (userGuess = "z")) {

		if (userGuess === computerGuess) {
			wins++;
			alert("You win! Time to see if you can...stump my log.");
			var win = 0;
			var losses = 0;
			var guessesleft = 12; 
		}

		else if (userGuess !== computerGuess) {
			losses++;
			guessesleft--;
		}
	}

	document.getElementById("wins").innerHTML = wins;
	document.getElementById("losses").innerHTML = losses;
	document.getElementById("guesses").innerHTML += even.key; 
	document.getElementById("guesses-left").innerHTML = guesses
};