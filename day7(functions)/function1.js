// Types of function parameters

// // // // 1. Required parameters

function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
// // // 2. default parameters

function discount(amount = 100) {
    console.log(`The total discount amount is ${amount}`);

}
discount();
discount(300);

// // // 3. Rest parameters

function findMax(...numbers) {
    console.log(Math.max(...numbers));
}
findMax(3, 4, 5, 1, 2, 100, 999, 4025);

// // // 4. parameter destructuring

//   1. object destructuring

function studentDetails({ id, name, batch }) // use curly braces inside the parenthesis for object destructuring
{
    console.log(id, name, batch);
}

const student = {
    id: 101,
    name: "Rizwan",
    batch: "August batch",
}
studentDetails(student);  //returns only the elements

// 2. Array destructuring

function days([sun, mon, tue, wed, thur, fri, sat]) // use [] for array destructuring
{
    console.log(sun, mon, tue, wed, thur, fri, sat);
}

weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
days(weeks);


//  function hoisting

saywelcome();

function saywelcome(){
    console.log("Welcome to Luminar Technolab");
}

// closure

function outer()
{
    let count=0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}

const counter=outer();
counter();
counter();
counter();

// lexical scope

function outer1(){
    let text="Im from outer1";
    function inner1(){
        console.log(text);
    }
    inner1();
}

outer1();
