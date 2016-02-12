console.log("Exercise 1");

result = 0

for (var i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    result = result + i;
  }
}

console.log(result);

console.log("Exercise 2")

function fibonacci(n) {
  var terms = [0, 1];
  i = 2;
  while (i <= n) {
    terms.push(terms[i - 1] + terms[i - 2]);
    i = i + 1;
  }
  return terms[n];
}

function fib(n) {
  var terms = [0,1];
  for(var i = 2; i <= n; i++) {
    terms.push(terms[i - 1] + terms[i - 2]);
  }
  return terms[n];
}

var num = 0;
var result = 0;
while (num <= 34) {
  if (fib(num) % 2 === 0){
    result = result + fib(num);
  }
  num++;
}

console.log(result);