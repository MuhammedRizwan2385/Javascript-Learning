// convert and display text in capital letters
str = "luminar";
console.log(str.toUpperCase());

//  convert to array - Array.from()

console.log(Array.from(str));

// converting string to array and then to uppercase

console.log(Array.from(str).map(char => char.toUpperCase()));

Array.from(str).map(char=>char.toUpperCase()).forEach(char=>console.log(char));

