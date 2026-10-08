// flat()- it will flatten nested array

a = [
    [10, 50],
    [20, 60],
    [1, 5],
    [15, 25],
    [3, 8],
    [100, 500],
]

// // // // 1. print all numbers >10

console.log(a.flat()); //single array

// numbers >10
console.log(a.flat().filter((x => x > 10)));

//  you can pass a larger depth value to completely flatten deeply nested arrays

const deeplyNestedArray = [1, [2, [3, [4, [5]]]]];

// // // // // completely flattened array 

console.log(deeplyNestedArray.flat(Infinity));