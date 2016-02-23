var colors = ["aqua", "black", "cadetblue", "crimson", "darkgreen", "deeppink", "gold",  "ivory", "lime", "maroon", "navy", "yellow"];
var winningColor;
var guessCount = 0;

function doGame(){
  var random = Math.floor(Math.random() * colors.length);
  winningColor = colors[random];
  alert(winningColor);
  var guess = prompt("Im thinking of one of these colors: \n\n" + colors.join(", ") +  "\n\n What color am I thinking of?");
  while(guess !== winningColor) {
     var guess = prompt("Im thinking of one of these colors: \n\n" + colors.join(", ") +  "\n\n What color am I thinking of?");
  }
};

function checkGuess() {
  if(colors.indexOf(guess) === 0) {
    alert("I dont recognize that color!");
  }else if(guess < winningColor) {
    alert("Your guess is alphabetically lower than mine.");
  }else if(guess > winningColor){
    alert("Your guess is alphabetically higher than mine.");
  }else {
    alert("Congratulations!");
    document.querySelector("body").style.background = winningColor;
  }
}