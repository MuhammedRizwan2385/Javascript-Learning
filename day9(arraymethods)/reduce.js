// reduce-function apply to all array elements and returns a single value(it will last value)

a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// find the sum of elements

console.log(a.reduce((n1, n2) => n1 + n2));



// find the highesh element
console.log(a.reduce((n1, n2) => n1 > n2 ? n1 : n2));

// find the lowest element

console.log(a.reduce((n1, n2) => n1 < n2 ? n1 : n2));


// reduceRight():- function apply to all array elements and returns a single value.)it will first be the value)

arr = [

    [1, "chinnu", 100],
    [2, "minnu", 200],
    [3, "ponnu", 100],
    [4, "manu", 100],
    [5, "anu", 300],
]

// who got the minimum value

console.log(arr.reduce((n1, n2) => n1[2] < n2[2] ? n1 : n2)); //it will return the last value

console.log(arr.reduceRight((n1, n2) => n1[2] < n2[2] ? n1 : n2)); //it will return the first occurence.

