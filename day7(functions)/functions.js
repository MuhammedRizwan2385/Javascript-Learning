function add(a, b) {
    console.log(a + b);
}
add(5, 6);

function addition(a, b) {
    return a + b;

}
console.log(addition(2, 3));
// subtraction using conditional operator 
function sub(a, b) {
    return a > b ? a - b : b - a;
}
console.log(sub(3, 5));

// function for finding cube of a number

function cube(a) {
    return a ** 3;
}
console.log(cube(5));

// checking whether odd or even
function oddven(number1) {
    if (number1 % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}

console.log(oddven(6));

function even(a)
{
    return a%2==0? "even":"odd";
}
console.log(even(5));