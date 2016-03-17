var name = "Sam"
var fullName = "Sam Ringleman"
var gwendy;
var hola;

function greetUser(name) {
  if (typeof name === 'undefined') {
    console.log("Hello World");
  }  else {
    console.log("Hello " + name + "!");
  }
}

greetUser(name);
greetUser(fullName);
greetUser(gwendy);
greetUser(hola);
greetUser();
greetUser("Sam");
