// string
// let first_name='john';
// let middle_name='sara';
// let last_name='doe';
// console.log(first_name,middle_name,last_name);
// console.log(typeof(first_name,middle_name,last_name));

// with template literals(``),it is possible to use both single as well as double quotes inside a string

// let sentence="this is "my car"";  //this will show error
// console.log(sentence);

// let sentence = `This is "My car"`;
// console.log(sentence);

// escape sequence characters

// let text1 = "this is my \"new\" car ";
// console.log(text1);
// let text2 = "This character \\ is backslash";
// console.log(text2);
// let text3 = "This character \` is backtick";
// console.log(text3);

// let strings = "I love \n coding";
// console.log(strings);

// let strings1="I love \t coding";
// console.log(strings1);

// let strings2="i love \v coding";
// console.log(strings2);

// type casting

// const num=10;
// const str="9";
// console.log(str+num);
// console.log(typeof(str+num));
// converting to string use variable.toString()
const num = 40;
const numToStr = num.toString();//type casting
console.log(typeof (numToStr));//string
console.log(numToStr + 9);
// converting to number use Number()

const str3 = "10";
const num3 = 10;
console.log(num3 + Number(str3));

// string properties and methods
let sname = "rizwan";
console.log(sname.length);
console.log(sname.toUpperCase());
console.log(sname.toLowerCase());

// accessing string characters

var companyname = "Luminar";
console.log(companyname.length);
// to fetch the first leter of  the string
console.log(companyname[0]);
// to fetch the last leter of  the string
console.log(companyname[companyname.length - 1]);
// using charAt(index)
console.log(companyname.charAt(5));

// replace

let name1="Ann M";
let newname=name1.replace("M","Luka");
console.log(newname);

// concat
let firstname="M";
let middlename="Muhammed";
let lastname="Rizwan";
let fullname=firstname.concat(middlename+lastname);
console.log(fullname);







