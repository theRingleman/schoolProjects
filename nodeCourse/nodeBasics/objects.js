var pet = {
  name: "Charli",
  type: "dog"
}

function printPet(pet) {
  console.log(["You own a", pet.type, "thats name is", pet.name + "."].join(" "))
}

printPet(pet);
