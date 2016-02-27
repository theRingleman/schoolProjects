//A basic function that reverses strings and returns the string in reverse
function reverseString(str) {
  var stringReverse = str.split('').reverse().join('');
  return stringReverse;
}

//Factoralizes a number and returns the result
function factorialize(num) {
  var result = 1;
  for (var i = 2; i <= num; i++){
    result *= i;
  }
  return result;
}

//Checks a string to see if it is a palindrome returns true or false
function palindrome(str) {
  var lowerStr = str.toLowerCase();
  var correctStr = lowerStr.replace(/\W|_/g, "");
  var backwardsStr = correctStr.split('').reverse().join('');
  // Good luck!
  if(backwardsStr === correctStr){
    return true;
  }else {
    return false;
  }
}

//Finds the longest word in a string and returns it's length
function findLongestWord(str) {
  //use .split to sort the string into an array
  var arr = str.split(" ");
  //use a variable to store the first string length
  var longestVar = arr[0].length;
  //run a for loop to compare length
  for(var i = 0; i < arr.length; i++){
    if(longestVar < arr[i].length){
      //store the longest string in the original variable
      longestVar = arr[i].length;
    }
  }
  //return the length of the longest str
  return longestVar;
}

// Takes a string and capitolizes the first letter of every word
// sets all other letters to lowercase returns title case string
function titleCase(str) {
  //convert str into an array with .split
  var firstLetters = [];
  var restOfLetters = [];
  var correctArr = [];
  var arr = str.split(" ");
  //loop through array
  for(var i = 0; i < arr.length; i++){
    //use .charAt and .toUpperCase for first letter
    firstLetters[i] = arr[i].charAt(0).toUpperCase();
    //retrieve the rest of the word and make it lower case
    restOfLetters[i] = arr[i].slice(1).toLowerCase();
    //combine restOfLetters and firstLetters
    correctArr[i] = firstLetters[i].slice(0) + restOfLetters[i].slice(0);
  }
  //use .join to bring back a str
  var correctStr = correctArr.join(" ");
  //return new str
  return correctStr;
}

//Takes a multidimensional array of nums and returns the largest number
//in each arr in a new arr
function largestOfFour(arr) {
  //declare arr storing first value of each sub array
  var nums = [];
  //loop with nested for and check which is larger
  for(var i = 0; i < arr.length; i++){
    nums.push(arr[i][0]);
    for(var j = 0; j < arr[i].length; j++){
      if(nums[i] < arr[i][j]){
        nums[i] = arr[i][j];
      }
    }
  }
  //store largest in first arr
  //return arr
  return nums;
}