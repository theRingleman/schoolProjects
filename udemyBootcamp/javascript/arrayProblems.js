// Problem 1: Print reverse
// Write a function printReverse() that takes an array as an argument and 
// prints out the elements in the array in reverse order HINT USE A LOOP

function printReverse(array) {
  var arrayLength = array.length;
  for (var i = 0; i <= array.length; i++){
    console.log(array[arrayLength]);
    arrayLength--;
  }
}

// Problem 2 isUniform()
// write a function isUniform which takes an array as an argument and returns true 
// if all elements in the array are identical HINT use a variable that keeps track of the first item

function isUniform(arr){
  var firstElm = arr[0];
  for(var i = 0; i < arr.length; i++){
    if(firstElm !== arr[i]) {
      return false;
    }
  }
  return true;
}

// Problem 3 sumArray()
// Write a function sumArray() that accepts an array of numbers and returns the sum of all numbers
// in the array HINT Have a result variable

function sumArray(nums) {
  var result = 0;
  nums.forEach(function(n){
    result = result + n;
  });
  return result;
}

// Problem 4 max()
// Write a function max() that accepts an array of numbers and returns the maximum
// number in the array HINT use a variable that stores the max number

function max(numbers) {
  var max = numbers[0];
  for(var i = 1; i < numbers.length; i++) {
    if(numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

function max2(arr){
  var max = arr[0];
  arr.forEach(function(n){
    if(n > max) {
      max = n;
    }
  })
  return max;
}

//I am adding a comment here for git test
//again this is all for a test