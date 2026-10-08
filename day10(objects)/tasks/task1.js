// TASK-1
// [id,name,price,stock]
products = [
    [1, 'Hide and seek', 50, 20],
    [2, 'lays', 20, 80],
    [3, 'oreo', 40, 100],
    [4, 'parleG', 25, 10],
    [5, 'tiger', 20, 0],
    [6, 'unibic', 60, 20],
    [7, 'good day', 70, 20]
]

//1. Display all products name
console.log("all products name");
products.forEach(p => console.log(p[1]));


//2. Display list of products under 50rs

console.log("list of products under 50rs");
products.filter(p => p[2] < 50).forEach(p => console.log(p[1], p[2]));



//3. Print details of 'oreo' product

console.log("details of 'oreo' product");

console.log(products.filter(p => p[1] === "oreo").flat());

//4. Display most coslty product details

console.log(" most coslty product details");
console.log(products.reduce((p1, p2) => p1[2] > p2[2] ? p1 : p2));

//5. Display out of stock product details

console.log("out of stock product details");
console.log(products.filter(p => p[3] == 0).flat());

//6. Display print details of 4th product

console.log("details of 4th product");
console.log(products.filter(p => p[0] === 4).flat());

//7. sort products details based on product availability stock by desending

console.log("sort products details based on product availability stock by desending");

stock_descending = products.toSorted((p1, p2) => p2[3] - p1[3]);
console.log(stock_descending);

//8. Display products having maximum availabile stock

console.log("Display products having maximum availabile stock");
console.log(stock_descending[0]);

//9. Display products having minimum availabile stock


console.log("Display products having minimum availabile stock");
console.log(stock_descending[6]);

//10. Sort the products based on rate by ascending order

console.log("Sort the products based on rate by ascending order");

console.log(products.sort((p1, p2) => p1[2] - p2[2]));