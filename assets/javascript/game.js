
var game = {
	wins: 0,
	losses: 0, 
	guessesLeft: 10,
}

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessedLetters = [];
var computerGuess = compGuess();

function compGuess() {
	return letters[Math.floor(Math.random() * letters.length)];
}

function isInArray(a) {
    for (var i = 0;i < guessedLetters.length; i++) {
        if (guessedLetters[i] === a) {
          return true;
        }
    }
    return false;
}

function newButtons() {
	for (var i = 0; i < letters.length; i++) {

		var newButton = document.createElement("button");

		newButton.className = "letters btn btn-default";

		newButton.setAttribute("id", letters[i]);

		newButton.innerHTML = letters[i];

		var buttonPalace = document.getElementById("letters");

		buttonPalace.appendChild(newButton);
	}	
}

// Option for clicking the guesses.
document.onclick = function(event) {

	var userGuess = event.target.id;

	if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess ===  "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {

		if (userGuess === computerGuess) {
			game.wins++;
			console.log("You win! The letter guessed was " + computerGuess);
			document.getElementById("guesses").textContent = userGuess;
			alert("You win! Would you like to play again and see if you can be stumped by my log?");
			game.guessesLeft = 10;
			computerGuess = compGuess();
			guessedLetters = [];
		}

		else if (userGuess !== computerGuess) {
			if (isInArray(userGuess)) {
          		alert("You already guessed that letter!");
       		}

       		else{
				game.guessesLeft--;
				guessedLetters.push(userGuess);
				document.getElementById("guesses").textContent = userGuess;
			}
		}
		
		if (game.guessesLeft === 0) {
			game.losses++;
			alert("You have been...stumped by my log. The letter you were trying to guess was " + computerGuess + " Would you like to try again?");
			document.getElementById("guesses").textContent= userGuess;
			console.log("You lost. The letter was " + computerGuess);
			game.guessesLeft = 10;
			computerGuess = compGuess();
			guessedLetters = [];
		}
	}

	document.getElementById("wins").innerHTML = game.wins;
	document.getElementById("losses").innerHTML = game.losses;
	document.getElementById("guesses-left").innerHTML = game.guessesLeft;
}

newButtons();