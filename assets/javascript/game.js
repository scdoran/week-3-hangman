var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var game = {
	wins: 0,
	losses: 0, 
	guessesLeft: 9,
}

document.onkeyup = function (event) {

	var userGuess = event.key;

  	for (var i = 0; i < 1; i++) {
  		var computerGuess = letters[Math.floor(Math.random() * letters.length)];
  	}

	if ((userGuess = "a") || (userGuess = "b") || (userGuess = "c") || (userGuess = "d") || (userGuess = "e") || (userGuess = "f") || (userGuess = "g") || (userGuess = "h") || (userGuess = "i") || (userGuess = "j") || (userGuess = "k") || (userGuess = "l") || (userGuess = "m") || (userGuess = "n") || (userGuess = "o") || (userGuess = "p") || (userGuess = "q") || (userGuess = "r") || (userGuess = "s") || (userGuess = "t") || (userGuess = "u") || (userGuess = "v") || (userGuess = "w") || (userGuess = "x") || (userGuess = "y") || (userGuess = "z")) {

		if (userGuess === computerGuess) {
			game.wins++;
			console.log("You win! The letter guessed was " + computerGuess);
			document.getElementById("guesses").textContent = " ";
			game.guessesLeft = 9;
			alert("You win! Would you like to play again and see if you can be stumped by my log?");
		}

		else if (userGuess !== computerGuess) {
			game.guessesLeft--;
			document.getElementById("guesses").textContent += event.key + " ";
		}	
		
		if (game.guessesLeft === 0) {
			alert("You have been...stumped by my log. The letter you were trying to guess was " + computerGuess + " Would you like to try again?");
			document.getElementById("guesses").textContent=" ";
			console.log("You lost. The letter was " + computerGuess);
			game.losses++;
			game.guessesLeft = 9;
		}		
	}

	document.getElementById("wins").innerHTML = game.wins;
	document.getElementById("losses").innerHTML = game.losses;
	document.getElementById("guesses-left").innerHTML = game.guessesLeft;
}
