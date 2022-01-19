// List of Pets
const append = ["Milo", "Otis", "Garfield"];
const prepend = ["Milo", "Otis", "Garfield"]; 
const removeLast = ["Milo", "Otis", "Garfield"]; 
const removeFirst = ["Milo", "Otis", "Garfield"];

// Appends pet "Odie" to the end of the pets array
let appendPet = () => append.push("Odie")

// Prepends a pet to the beginning of the pets array
let prependPet = () => prepend.unshift("Odie")

// Removes the last pet from the pets array
let removeLastPet = () => removeLast.pop()

// Removes the First pet from the pets array
let removeFirstPet = () => removeFirst.shift()
