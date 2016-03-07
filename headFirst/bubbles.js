var scores = [60,50,60,58,54,54,
              58,50,52,54,48,69,
              34,55,51,52,44,51,
              69,64,66,55,52,61,
              46,31,57,52,44,18,
              41,53,55,61,51,44];
var highScore = 0;
var highestScores = [];              

function getHighScore() {
  for (var i = 0; i < scores.length; i++) {
    console.log("Bubble solution #" + i + " score: " + scores[i]);
    if(scores[i] > highScore){
      highScore = scores[i];
    }
  };
}

function getBestTests() {
  for (var j = 0; j < scores.length; j++) {
    if (scores[j] === highScore) {
      highestScores.push(j);
    }
  }
}

getHighScore();
getBestTests();

console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score : " + highScore);
console.log("Solutions with the highest score: " + highestScores.join(", "));