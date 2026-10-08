// sorting of strings

var vehicle = ["Bus", "Car", "Bike", "Cycle"];
console.log(vehicle.sort());
console.log(vehicle.reverse());

// sorting of numbers
var points = [40, 100, 1, 5, 25, 10];

// // Given an array of numbers and perform sorting
// // 1.ascending order the numbers 

console.log(points.sort((n1, n2) => n1 - n2));

// // 2.descending order the numbers

console.log(points.sort((n1, n2) => n2 - n1));

// // 3.find the lowest number
console.log(points.sort((n1, n2) => n1 - n2));
let lowest=points[0];
console.log(lowest);
// // 4.find the highest 
let highest=points[5];
console.log(highest);

