//  map()-creates a new array by calling function for every  array element

// returns a new array with the square of all element values
var a=[10,11,12,13,14]
console.log(a.map(num=>num*2));

// multiply all the values in an array with 10:

var a=[10,11,12,13,14];
console.log(a.map(num=>num*10));

// return a new array with the square root of all element values:

var a1=[100,4,9,16,25];
console.log(a1.map(num=>Math.sqrt(num)));