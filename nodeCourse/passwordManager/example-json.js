var person = {
  name: 'Sam',
  age: 26
}
var personJSON = JSON.stringify(person);

console.log(personJSON);
console.log(typeof personJSON);

var personObject = JSON.parse(personJSON);

console.log(personObject.name);
console.log(typeof personObject);

console.log('Challenge area');

var animal = '{"name": "Charli"}';
var animalObj = JSON.parse(animal);
animalObj.age = 5;
animal = JSON.stringify(animalObj);
console.log(animal);
