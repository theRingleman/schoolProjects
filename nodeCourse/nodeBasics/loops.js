function countDownWhile(start, stop) {
  while (start >= stop) {
    console.log("while: " + start);
    start--;
  }
}

function countDownFor(start, stop) {
  for(; start >= stop; start--) {
    console.log('for: ' + start);
  }
}

countDownWhile(10, 0);
countDownFor(15, 5);
