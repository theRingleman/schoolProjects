var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var p1Score = 0;
var p2Score = 0;
var p1ScoreBoard = document.querySelector("#p1ScoreBoard");
var p2Scoreboard = document.querySelector("#p2ScoreBoard");
var maxScore = document.querySelector("#maxScore");
var gamePoints = document.querySelector("input");
var gameOver = false;
var winningScore = 5;
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
  reset();
});

p1Button.addEventListener("click", function(){
  if(!gameOver){
    p1Score++;
    if(p1Score === winningScore) {
      gameOver = true;
      p1ScoreBoard.classList.add("winner");
    }
    p1ScoreBoard.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function(){
  if(!gameOver){
    p2Score++;
    if(p2Score === winningScore){
      gameOver = true;
      p2ScoreBoard.classList.add("winner");
    }
    p2ScoreBoard.textContent = p2Score;
  }
});

gamePoints.addEventListener("change", function(){
  maxScore.textContent = gamePoints.value;
  winningScore = gamePoints.valueAsNumber;
  reset();
});

function reset(){
  p1Score = 0;
  p2Score = 0;
  p1ScoreBoard.textContent = p1Score;
  p2ScoreBoard.textContent = p2Score;
  p2ScoreBoard.classList.remove("winner");
  p1ScoreBoard.classList.remove("winner");
  gameOver = false;
};