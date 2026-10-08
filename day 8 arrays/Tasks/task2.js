// var nestedArray = [
//     [5, 6, 7, -2],
//     [-5, -6, -7],
//     [8, 9, 10],
//     [3, 5, 2, 1, 4],
//     [-3, 5, 2, 1,],
//     [4, 2, 6, 8],
// ]

// //1. Find Maximum: Write a function to find the maximum number in a nested array of integers.

// // function maximum(nestedArray) {
// //     return Math.max(...nestedArray.flat());
// // }
// // console.log(`maximum: ${maximum(nestedArray)}`);

// //2. Calculate Average: Create a function to calculate the average of all numbers in a nested array.

// // function averageArray(nestedArray) {
// //     nestedArrayFlattened = nestedArray.flat();
// //     let sum = 0;
// //     for (let i of nestedArrayFlattened) {
// //         sum += i;
// //     }
// //     let average = sum / nestedArrayFlattened.length;
// //     return average;

// // }

// // console.log(`average of nested array=${averageArray(nestedArray)}`);

// //3. Count Negative Numbers: Implement a function that counts the number of negative numbers in a nested array.

// // function countOfNegativeNumbers(nestedArray) {
// //     var count = 0;
// //     for (let i of nestedArray) {
// //         for (let j of i) {
// //             if (j < 0) {
// //                 count += 1;
// //             }
// //         }
// //     }
// //     return count;
// // }
// // console.log(`There are ${countOfNegativeNumbers(nestedArray)} negative numbers in the given nested array`);

// //4. Subarray Sums: Write a function that returns an array of sums of each subarray within the nested array.

// // function subarraysum(nestedArray) {
// //     let sumarray = [];
// //     for (let i of nestedArray) {
// //         let subsum = 0;
// //         for (let j of i) {
// //             subsum += j;

// //         }
// //         sumarray.push(subsum);
// //     }
// //     return sumarray;
// // }
// // console.log("subarray sum:");
// // console.log(subarraysum(nestedArray));


// //5. Sort Subarrays: Implement a function that sorts each subarray in a nested array of numbers.

// // function sortedsubarray(nestedArray) {
// //     for (let i of nestedArray) {
// //         i.sort(function (x, y) { return x - y });

// //     }
// //     return nestedArray
// // }

// // console.log("sorted subarray");
// // console.log(sortedsubarray(nestedArray));



// //6. Flatten Nested Array: Write a function to flatten a nested array to a single-level array.

// // function flatNestedArray(nestedArray) {
// //     return nestedArray.flat();
// // }
// // console.log("Flatten Nested Array:");
// // console.log(flatNestedArray(nestedArray));

// //7. Remove Duplicates: Create a function that removes duplicate elements from the nested array.

// // by using set

// // function removedDuplicates(nestedArray) {
// //     let res = new Set(nestedArray.flat());
// //     return res;
// // }

// // console.log("Removed duplicates");
// // console.log(removedDuplicates(nestedArray));

// //8. Reverse Subarrays: Implement a function to reverse each subarray within the nested array.

// // function reversesubarray(nestedArray) {
// //     for (let i of nestedArray) {
// //         i.reverse();
// //         // (function (x, y) { return x - y });

// //     }
// //     return nestedArray
// // }

// // console.log("reversed subarray");
// // console.log(reversesubarray(nestedArray));

// //9. Filter Even Numbers: Write a function to filter out all even numbers from the nested array.

// // function filterEven(nestedArray) {
// //     let res = nestedArray.flat().filter(x => x % 2 == 0);
// //     return res;

// // }
// // const result = filterEven(nestedArray);
// // console.log("filtered even");
// // console.log(result);

// //10. Find Longest Subarray: Create a function that returns the longest subarray within the nested array.

var nestedArray = [
    [5, 6, 7, -2],
    [-5, -6, -7],
    [8, 9, 10],
    [3, 5, 2, 1, 4],
    [-3, 5, 2, 1,],
    [4, 2, 6, 8],
]
function longestsubarray(nestedArray) {
    let longest = [];
    for (let i of nestedArray) {
        if (i.length > longest.length) {
            longest = i;
        }
    }
    return longest;
}
console.log(longestsubarray(nestedArray));





