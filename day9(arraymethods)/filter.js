// filter()-creates a new array with elements satisfy the condition given in an function.

var a = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// print only even numbers

console.log(a.filter(num => num % 2 == 0));

// returns an array of all values in ages[] that are 18 or over
ages=[20,14,26,37,30,10,8];
console.log(ages.filter(num=>num>=18));