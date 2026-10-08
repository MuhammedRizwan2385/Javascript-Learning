// Write a program to find the area of a triangle using function

// function triangleArea(a, b, c) {
//     let s = (a + b + c) / 2;
//     let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;

// }
// console.log(`area of triangle is ${triangleArea(2, 4, 5)}`);

// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

// function primeornot(n) {
//     if (n <= 1) {
//         return "Not a prime";
//     }
//     for (var i = 2, j = n / 2; i <= j; i++) {
//         if (n % i == 0) {
//             return "not a prime";

//         }
//     }
//     return "prime";
// }
// var digit = 97;
// console.log(primeornot(digit));

// Write a JavaScript function that checks whether a passed string is palindrome or not?

// function palindrome(text) {
//     if (text == text.split("").reverse().join(""))   // first it will split to array then reverse array and convert to string again
//     {
//         console.log("The given string is palindrome");
//     }
//     else {
//         console.log("The given string is not palindrome");
//     }

// }
// var str = "malayalam";
// palindrome(str);

// Write an anonymous function that takes two numbers as arguments and returns their product.

// const product = function (x, y) {
//     return x * y;
// }
// console.log((product(2, 3)));

// Create an arrow function that squares a given number.

// const square = (n) => n ** 2;
// console.log(square(2));


// Write a recursive function in JavaScript to calculate the nth Fibonacci number. The Fibonacci sequence is defined as follows: the first two numbers are 0 and 1, and each subsequent number is the sum of the two preceding ones.
function fibonacci(n) {
    if (n <= 1)
        return n;

    else
        return fibonacci(n - 1) + fibonacci(n - 2);
}
var limit = 10;
console.log(fibonacci(limit));





// 7. What is the difference between function parameters and arguments?
// 8. What is the purpose of the return statement in a function, and what does it do?
// 9. What are the differences between arrow functions and regular functions in JavaScript?
// 10. What is the difference between local and global scope in JavaScript functions?
// 11. Create a Function to Convert Celsius to Fahrenheit using arrow function.

// const degreeToFarenheit = (degreecelsius) => {
//     return degreecelsius * 33.8;
// }
// var tempCelsius = 36;
// console.log(`The ${tempCelsius} degree celsius is ${degreeToFarenheit(tempCelsius)} farenheit`);


// 12. Create a Function to print Greeting Message using arrow function.

// const greetings = (message) => {
//     console.log(message);
// }
// greetings("Hello world");
