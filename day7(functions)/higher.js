// A callback function,the name of the function could be any name

// const callback=(n) =>{
//     return n**2;
// }
// console.log(callback(3));


// // // // // Function that takes another function as a callback

// function cube(callback,n){
//     return callback(n)*n;
// }

// console.log(cube(callback,3));

// function sayhello(){
//     console.log("Hello");
// }
// setInterval(sayhello,1000);//it will print hello in every 1000 ms

function sayhai(){
    console.log("Hai");
}
setTimeout(sayhai,4000); //it will print hai after 4000 ms