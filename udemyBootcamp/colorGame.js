var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

for(var i = 0; i < modeBtns.length; i++){
  modeBtns[i].addEventListener("click", function(){
    modeBtns[0].classList.remove("selected");
    modeBtns[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    reset();
  })
}

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){
  reset();
})

for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.background = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function(){
    // grab color of clicked square
    var clickedColor = this.style.background;
    //compare color to pickedColor
    if(clickedColor === pickedColor){
      //This is what happens when you win
      messageDisplay.textContent = "Correct";
      changeColors(clickedColor);
      resetButton.textContent = "Play Again?";
      h1.style.background = clickedColor;
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  //loop through all squares
  for(var i = 0; i < squares.length; i++){
    //change color to match given color
    squares[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length)
  return colors[random];
}

function generateRandomColors(num){
  // make an array
  var arr = [];
  // add num random colors to array
  for(var i = 0; i < num; i++){
    //get random color and push into arr
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

function randomColor(){
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256)
  //pick a "green" from 0 - 155
  var g = Math.floor(Math.random() * 256)
  //pcik a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256)
  var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
  return rgb;
}

function reset(){
   //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from arr
  pickedColor = pickColor();
  //change colorDisplay to match new picked color
  colorDisplay.textContent = pickedColor; 
  //change colors of squares on the page
  for(var i=0; i<squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  //change h1 background back to original color
  h1.style.background = "steelblue";
  //change text to say New Colors
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
}