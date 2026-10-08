// logic and -&&

// a=5;
// b=5
// console.log((a>b)&&(a==b));

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// logic or ||

// a=5;
// b=5
// console.log((a>b)||(a==b));

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false ||false);

// logical not

// console.log(!true);
// console.log(!false);

// console.log(!1); // 1 is truthy so not 1 means false
// console.log(!0); // 0 is falsy so not 0 means true

// console.log(!"hello") //non empty string is truthy so not truthy means false
// console.log(!"") //empty string is falsy so not falsy means true

//  console.log(!null); //null is falsy so not null means true

//  console.log(!undefined); //undefined is falsy so not falsy is true

// other operator 
// ternary or conditional operator
var n=10;
var result= (n%2==0)? "even": "odd";
console.log(`The number is ${result}`);