function flipBool(bool) {
  if (typeof bool === "boolean") {
    return !bool;
  } else {
    console.log("Warning! Not a boolean.")
  }
}

console.log(flipBool(true));
console.log(flipBool(false));
console.log(flipBool(12));
