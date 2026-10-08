// print a number in reverse order

var input = 123;
var str = "";

while (input > 0) {
    rem = input % 10;
    str += rem;
    input = Math.floor(input / 10);

}
console.log(str);

// instead of string way

var input = 123;
var reversed=0;

while (input > 0) {
    rem = input % 10;
    reversed=reversed*10+rem;
    input = Math.floor(input / 10);

}
console.log(str);
