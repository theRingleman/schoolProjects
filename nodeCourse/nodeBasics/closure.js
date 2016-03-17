function greetMaker(name) {
  function greet() {
    console.log('Hello ' + name + '!');
  }
  return greet;
}

var greetSam = greetMaker('Sam');
greetSam();

function createAdder(baseNumber) {
  return function adder(numberToAdd) {
    return baseNumber + numberToAdd;
  }
}

var addTen = createAdder(10);
console.log(addTen(2));
console.log(addTen(0));
console.log(addTen(96));
