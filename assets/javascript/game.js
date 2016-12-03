var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var game = {
	wins: 0,
	losses: 0, 
	guessesLeft: 9,
}

document.onkeyup = function (event) {

	var userGuess = event.key;

	var computerGuess = letters[Math.floor(Math.random() * letters.length)];

	if ((userGuess = "a") || (userGuess = "b") || (userGuess = "c") || (userGuess = "d") || (userGuess = "e") || (userGuess = "f") || (userGuess = "g") || (userGuess = "h") || (userGuess = "i") || (userGuess = "j") || (userGuess = "k") || (userGuess = "l") || (userGuess = "m") || (userGuess = "n") || (userGuess = "o") || (userGuess = "p") || (userGuess = "q") || (userGuess = "r") || (userGuess = "s") || (userGuess = "t") || (userGuess = "u") || (userGuess = "v") || (userGuess = "w") || (userGuess = "x") || (userGuess = "y") || (userGuess = "z")) {

		if (userGuess === computerGuess) {
			wins++;
			document.getElementById("guesses").textContent += event.key + " ";
			game.guessesLeft = 9;
			alert("You win! The letter was " + computerGuess + "Would you like to see if you can be stumped by my log again?");
		}

		else if (userGuess !== computerGuess) {
			game.guessesLeft--;
			console.log("You guessed " + event.key + " ");
			document.getElementById("guesses").textContent += event.key + " ";
		}	
		
		else if (game.guessesLeft === 0) {
			alert("You have been...stumped by my log. The letter you were trying to guess was " + computerGuess + " Would you like to try again?");
			document.getElementById("guesses").textContent += event.key + " ";
			game.losses = 1;
			game.guessesLeft = 9;
		}		
	}

	document.getElementById("wins").innerHTML = game.wins;
	document.getElementById("losses").innerHTML = game.losses;
	document.getElementById("guesses-left").innerHTML = game.guessesLeft;
}