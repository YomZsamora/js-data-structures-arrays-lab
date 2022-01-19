// List of Pets
const append = ["Milo", "Otis", "Garfield"];
const prepend = ["Milo", "Otis", "Garfield"]; 
const removeLast = ["Milo", "Otis", "Garfield"]; 
const removeFirst = ["Milo", "Otis", "Garfield"];

// Appends pet "Odie" to the end of the pets array
let appendPet = () => {
   return append.push("Odie");
}

// Prepends a pet to the beginning of the pets array
let prependPet = () => {
   return prepend.unshift("Odie");
}