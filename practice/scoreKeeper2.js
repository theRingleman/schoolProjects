var p1Btn = document.querySelector("#p1Btn");
var p2Btn = document.querySelector("#p2Btn");
var rstBtn = document.querySelector("#rstBtn");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var winningNumber = document.querySelector("#winningNumber");
var matchSet = document.querySelector("#matchSet")
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Btn.addEventListener("click", function(){
  if(!gameOver){
    p1Score++;
    if(p1Score === winningScore){
      gameOver = true;
      p1Display.classList.add("winner");
    }
  }
  p1Display.textContent = p1Score;
});

p2Btn.addEventListener("click", function(){
  if(!gameOver){
    p2Score++;
    if(p2Score === winningScore){
      gameOver = true;
      p2Display.classList.add("winner");
    }
  }
  p2Display.textContent = p2Score;
});

rstBtn.addEventListener("click", function(){
  reset();
});

matchSet.addEventListener("change", function(){
  winningNumber.textContent = matchSet.value;
  winningScore = matchSet.valueAsNumber;
  reset();
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  gameOver = false;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
}

function p1Scores(){
  if(!gameOver){
    p1Score++;
    if(p1Score === winningScore){
      gameOver = true;
      p1Display.classList.add("winner");
    }
  }
  p1Display.textContent = p1Score;
}