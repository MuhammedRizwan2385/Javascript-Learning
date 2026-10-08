// swapping numbers
var n1 = 6;
var n2 = 7
console.log("Swapping by using third variable");
console.log(`Before swap n1=${n1} n2=${n2}`);
var temp;
temp = n1;
n1 = n2;
n2 = temp;
console.log(`After swap n1=${n1} n2=${n2}`);

console.log("swapping by using mathematical operators");

var a = 6;
var b = 7;
console.log(`Before swap n1=${a} n2=${b}`);
a = a + b;
b = a - b;
a = a - b;
console.log(`After swap n1=${a} n2=${b}`);