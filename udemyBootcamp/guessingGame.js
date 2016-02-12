var secretNumber = 15;
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);


if (guess === secretNumber) {
	alert("Congrats you got it right!");
}

else if (guess > secretNumber) {
	alert("Nope too high!");
}

else {
	alert("Nope too low!");
}
