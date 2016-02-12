var age = prompt("How old are you?");

if(age < 0){
  console.log("Error, you cannot be a negative age...");
}

else if(age < 18){
  console.log("Sorry, you are not old enough to enter the venue");
}

else if(age === 21){
  console.log("Happy Birthday! Come on in and have a shot!");
}

else if(age < 21){
  console.log("You can enter, but cannot drink.");
}

else {
  console.log("Come on in. You can drink.");
}

if(age % 2 === 1){
  console.log("Your age is odd!");
}

else {
  console.log("Your age is even by the way!");
}