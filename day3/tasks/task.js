// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

var firstName = "Muhammed";
var lastName = "Rizwan";
country = "India";
city = "Adoor";
age = 22;
isMarried = "no";
year = 2004;

console.log(typeof (firstName));
console.log(typeof (lastName));
console.log(typeof (country));
console.log(typeof (city));
console.log(typeof (age));
console.log(typeof (isMarried));
console.log(typeof (year));

//Write a JavaScript program to convert a length measurement from miles to kilometers and kilometers to miles.

var miles = 15;
console.log(`${miles} miles is ${miles * 1.609344} kilometres.`);

var kms = 15;
console.log(`${kms} kilometers is ${kms / 1.609344} kilometres.`);

// Write a JavaScript program that converts hours into minutes and seconds.
var hour = 1;
console.log(`The ${hour} hour is ${hour * 60} minutes`);
console.log(`The ${hour} hour is ${hour * (60 * 60)} seconds`);

// Check if type of '10' is equal to 10

console.log(typeof (10) == typeof ('10'));

//Write a program that checks if a person is eligible to vote based on their age using the ternary operator.
var age = 17;
var eligible = (age >= 18) ? "eligible" : "not eligible";
console.log(`The candidate of the age ${age} is ${eligible} for the voting`);



//Check if parseInt('9.8') is equal to 10

console.log(parseInt('9.8') == 10);


//Write a JavaScript program to convert currency from USD to INR and INR to USD.

var inr = 1;
var usd = 100;
console.log(`The ${inr} INR is ${inr * 95.89} USD`);
console.log(`The ${usd} USD is ${usd / 95.89} INR`);

//Write a JavaScript program to calculate the area and circumference of a circle.

radius = 3;
area = 3.14 * (radius ** 2);
circumference = 2 * 3.14 * radius;
console.log(`Area of the circle: ${area}`);
console.log(`Circumference of the circle= ${circumference}`);

//Write a JavaScript program to perform temperature conversion between Celsius and Fahrenheit.
// 1c =33.8F

var tempCelsius=1;
var tempFarenheit=1;
console.log(`The ${tempCelsius} degree celsius is ${tempCelsius*33.8} farenheit`);
console.log(`The ${tempFarenheit} Farenheit is ${tempFarenheit/33.8} Degree Celsius`);

//Boolean value is either true or false.
//i>Write three JavaScript statement which provide truthy value.

console.log(true && true);
console.log(true||false);
console.log(!false);

//ii>Write three JavaScript statement which provide falsy value.
console.log(true && false);
console.log(false||false);
console.log(!true);
