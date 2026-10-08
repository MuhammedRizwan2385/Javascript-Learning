// datatypes
// 1.string examples


// var name1="vishnu";
// var name2="viz";
// console.log(name1);
// console.log(name2);
// console.log(name1,name2);
// console.log(`employees are ${name1} & ${name2}`);

// 2.numbers example
//  var n1=3;
//  var n2=3.433;
//  console.log(n1,n2);

//  3.boolean example

// const ab=true; //1
// const bc=false; //0
// console.log(ab);
// console.log(bc);
// console.log(ab ,bc);

// 
// 4. undefined examples

//  let firstname; //only declarations
//  console.log(firstname); //undefined

//  5. null examples

// let value=null;
// console.log(value);

// 6. object example.

// var student={
//     firstname:"muhammed",
//     lastname:null,
//     age:22,
//     result:true,
//     class:"tenth",

// }
// console.log(student);
// console.log(student.age);

// array example

// var arr=[25,"arun",true,null];
// console.log(arr);
// console.log(arr[1]);
// console.log(arr[0]);

// function example

// function sum(a,b){ //function definition
//     c=a+b;
//     return c;
// }
// console.log(sum(5,3)); //function calling

//  type example
// undefined type example

// let d1;
// console.log(d1);
// console.log(typeof(d1));

// other type examples

// let data=123;
// let d2="jkl";
// const b1=true;
// console.log(typeof(data));
// console.log(typeof(d2));
// console.log(typeof(b1));

// type conversion
//  implicit conversion-in this method it automatically convert by javascript
// implicit conversion --coercion
console.log("implicit conversion result");
let a="5";
let b=10;
console.log(typeof(a)); //string
console.log(typeof(b)); //number
console.log(a+b); //510 means converted to string
console.log(typeof(a+b));

// explicit conversion -converted manually
console.log("explicit conversion result");
let c=Number(a);
console.log(typeof(c));
console.log(c+b);
console.log(typeof(c+b));


