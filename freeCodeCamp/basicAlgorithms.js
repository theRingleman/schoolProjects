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

//Checks if the last of the string is the same as the target
//Returns true or false
function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  //find length of target and use it in .substr
  if(str.substr(target.length * -1) === target){
    return true;
  }else{
    return false;
  }
}

//Takes in any string and repeats it how ever many times you specified
//Returns desired string
function repeat(str, num) {
  // repeat after me
  var arr = [];
  for (var i = 0; i < num; i++){
    arr.push(str);
  }
  return arr.join("");
}

//Takes in a string and truncates it by the amount specified in num
//if num is longer or equal to str then it returns the str, 
//returns the truncated string
function truncate(str, num) {
  // Clear out that junk in your trunk
  //declare var to store new str in
  var newStr;
  //if statement for num parameters
  if(num === str.length || num > str.length){
    return str;
  }else if(num <= 3){
    newStr = str.slice(0, num) + "...";
  }else{
    newStr = str.slice(0, (num - 3)) + "...";
  }
  //slice str by num minus three
  //add in ...
  return newStr;
}

//takes in an array and returns the arrays data in a multidimensional array
//in chunks that the user specifies
function chunk(arr, size) {
  // Break it up.
  //create blank arr
  var newArr = [];
  var count = 1;
  //for loop to cycle through arr and slice and push to new arr
  for(var i = 0; i < arr.length; i += size){
    newArr.push(arr.slice(i, (size * count)));
    count++;
  }
  return newArr;
}

//Takes an arr and the returns the elements left over
//after being chopped by the howMany amount
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var newArr = arr.splice(0, howMany);
  
  return arr;
}

//Return true if the string in the first element of the array
//contains all of the letters of the string in the second element of the array.
function mutation(arr) {
  var firstElm = arr[0].toLowerCase().split("");
  var secondElm = arr[1].toLowerCase().split("");
  
  for(var i = 0; i < secondElm.length; i++){
    if(firstElm.indexOf(secondElm[i]) === -1){
      return false;
    }
  }
  return true;
}

//checks the array for any falsy statements, removes them, then returns the array 
//without the falsy statements
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var newArr = [];
  function nope(val){
    if(val !== false){
      return val;
    }
  }
  
  newArr = arr.filter(nope);
  return newArr;
}

//A giant pain in the ass
function destroyer(arr) {
  // Remove all the values
  var elmToDestroy = [];
  for(var i = 1; i < arguments.length; i++){
    elmToDestroy.push(arguments[i]);
  }
  
  var elmToSurvive = arguments[0].filter(function(element){
    var toSurvive = true;
    
    for (var i = 0; i < elmToDestroy.length; i++){
      if(element === elmToDestroy[i]){
        toSurvive = false;
      }
    }
    return toSurvive;
  });
  
  return elmToSurvive;
}

//dont fully understand why this works because of the a-b
function where(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  arr.sort(function(a,b){
    return a - b;
  });
  return arr.indexOf(num);
}
where([5, 3, 20, 3], 5);
