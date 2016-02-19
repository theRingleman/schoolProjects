function isEven(x) {
  if (x % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
}

function factorial(num) { 
  var result = 1
  for (var i = 2; i <= num; i++){
    result = result * i;
  }
  return result;
}

function otherFactorial(num) {
  var result = 1
  if (num === 0) {
    return 1;
  }
  else{
    while (num >= 1){
      result = result * num;
      num--;
    }
  }
  return result;
}

function kebabToSnake(str){
  var newStr = str.replace(/-/g, "_");
  return newStr;
}