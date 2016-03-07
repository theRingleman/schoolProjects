var taxi = {
  make: "Webville Motors",
  model: "Taxi",
  year: 1955,
  color: "yellow",
  passengers: 4,
  convertible: false,
  mileage: 281341
};

var cadi = {
  make: "GM",
  model: "Cadillac",
  year: 1955,
  color: "tan",
  passengers: 5,
  convertible: false,
  mileage: 12892
}

var fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passengers: 2,
  convertible: false,
  mileage: 88000,
  started: false,
  fuel: 0,
  start: function() {
    if(this.fuel > 0) {
      this.started = true;
    } else {
      alert("This car is on empty, fill up before starting!");
    }
  },
  stop: function() {
    this.started = false;
  },
  drive: function() {
    if (this.started) {
      if (this.fuel > 0) {
        alert(this.make + " " + this.model + " goes zoom zoom!");
        this.fuel--;
      } else {
        alert("Uh oh, out of fuel");
        this.stop();
      }
    } else {
      alert("You need to start the engine first.");
    }
  },
  addFuel: function(amount){
    this.fuel = this.fuel + amount;
  }
};

var chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  convertible: "false",
  mileage: 1021
}

var eightBall = {
  index: 0,
  advice: ["yes", "no", "maybe", "not a chance"],
  shake: function() {
    this.index = this.index + 1;
    if (this.index >= this.advice.length) {
      this.index = 0;
    }
  },
  look: function() {
    return this.advice[this.index];
  }
}

worthIt(taxi);
worthIt(cadi);
worthIt(fiat);
worthIt(chevy);

function prequal(car) {
  if (car.mileage > 10000) {
    return false;
  } else if (car.year > 1960) {
    return false;
  } else {
    return true;
  }
}

function worthIt(car) {
  var worthALook = prequal(car);
  if (worthALook) {
    console.log("You gotta check out this " + car.make + " " + car.model);
  } else {
    console.log("You should really pass on the " + car.make + " " + car.model);
  }
}