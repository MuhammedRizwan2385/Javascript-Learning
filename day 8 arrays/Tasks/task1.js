// Write a note on array methods in javascript with example.  Note:You should find all the methods and try to implement them.

//refer book

// Create an array of numbers and add numbers to this array and Keep adding numbers to the array in the even number format





// let numbers = [];

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         numbers.push(i);
//     }
// }




// filter the numbers divisible by 10 from a given array Eg: [10,25,67,45,70,36,50]

// var arr3 = [10, 25, 67, 45, 70, 36, 50];
// var filtered_array = [];
// for (let i of arr3) {
//     if (i % 10 == 0) {
//         filtered_array.push(i);
//     }
// }
// console.log("numbers divisible by 10 are ");
// console.log(filtered_array);

// Create an array of square of given number eg: [3,4,5,6,7] 

// var arr4 = [3, 4, 5, 6, 7];
// var arr4_new = [];
// for (let i of arr4) {
//     arr4_new.push(i ** 2);
// }
// console.log("array of square ");
// console.log(arr4_new);


//Write a function to remove all duplicate elements from an array.

// method 1
// normal way

// function removedDuplicates(arr5) {
//     let unique = [];
//     for (let i of arr5) {
//         if (unique.includes(i)) {
//             continue;
//         }
//         unique.push(i);

//     }
//     return unique;

// }
// const arr5 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8];
// console.log("Removed duplicates");
// console.log(removedDuplicates(arr5));

//  method-2
// by using set

// function removedDuplicates(arr5){
//     let res=new Set(arr5);
//     return res;
// }
// const arr5 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8];
// console.log("Removed duplicates");
// console.log(removedDuplicates(arr5));

// method 3
// by using filter

// note:
// filter() checks each element in the array.
// value = current element, index = current element's index.
// indexOf(value) returns the first index where that value appears.
// If indexOf(value) === index, it means this is the first occurrence,
// so the element is kept. Otherwise, it is a duplicate and removed.



// function removeDuplicates(arr5) {
//     return arr5.filter((value, index) => arr5.indexOf(value) === index); //checking whether current elements index is same as the index of first occurence

// }
// const arr5 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8];
// console.log("Removed duplicates");
// console.log(removeDuplicates(arr5));




// Write a function to reverse an array in-place (without creating a new array).

// using reverse()

// function reverse_array(arr){
// return arr.reverse();
// }
// const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8]
// console.log("reversed array");
// console.log(reverse_array(arr));

// using two pointers(original way)(without using inbuilt function)

// function reverse_array(arr)
// {let left=0;
//  let right=arr.length-1;
//  while(left<right){
//     let temp=arr[left];
//     arr[left]=arr[right];
//     arr[right]=temp;
//     left=left+1;
//     right=right-1;
//  }
// return arr;
// }

// const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8]
// console.log("reversed array");
// console.log(reverse_array(arr));






// Write a function to find the intersection of two arrays
// using filter and includes.

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7];
// function intersection(arr1,arr2){
//     const result=arr1.filter((x=>arr2.includes(x)));
//     return result;
// }
// console.log("Intersection of two array:");
// console.log(intersection(arr1,arr2));





// Write a function to remove all falsy values (e.g., null, undefined, 0, false) from an array.

// function removeFalsy(arr){

//     return arr.filter((x=>Boolean(x)));  //checking whether the boolean value of each item is true if yes it will return otherwise removed

// }
// var arr=[1,2,0,null,false,undefined,100];
// console.log(removeFalsy(arr));





// Write a function to shuffle the elements of an array randomly.

// Fisher Yates shuffle method

// function fisheryates(points){
//     for(let i=points.length-1;i>0;i++)
//     {let j=Math.floor(Math.random()*(i+1));
//      let k=points[i];
//      points[i]=points[j];
//      points[j]=k;

//     }
//     return points;
// }

// const points = [40, 100, 1, 5, 25, 10];
// console.log("Shuffled using Fisher Yates shuffle method");
// console.log(fisheryates(points));

// Write a function to find the difference between two arrays (elements in one array but not in the other).

// method 1
// normal way using only includes

// function difference_array(arr1, arr2) {
//     const not_in_arr2 = [];
//     const not_in_arr1 = [];
//     for (let i of arr1) {
//         if (arr2.includes(i))
//             continue;
//         not_in_arr2.push(i);


//     }
//     for (let j of arr2) {
//         {
//             if (arr1.includes(j))
//                 continue;
//             not_in_arr1.push(j);
//         }

        

//     }
//     return [not_in_arr1, not_in_arr2].flat();
// }
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7];

// console.log(difference_array(arr1, arr2));

// method 2
// by using filter and includes

// Find the elements that are present in one array but not in the other.
// The first filter() finds elements in arr1 that are not in arr2.
// The second filter() finds elements in arr2 that are not in arr1.
// flat() combines both filtered arrays into a single array.


// function difference_array(arr1,arr2)
// {return [
//     arr1.filter((x=>!arr2.includes(x))),
//     arr2.filter((x=>!arr1.includes(x)))
// ].flat();

// }
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7];

// console.log(difference_array(arr1, arr2));





