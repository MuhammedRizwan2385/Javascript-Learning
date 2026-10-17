// . Number Programs – 10 Questions
// 1. Write a JavaScript program to check whether a number is prime.

// 2. Write a program to print all prime numbers between 1 and 100.

// 3. Write a program to find the factorial of a number using a loop.

// 4. Write a program to reverse a number without converting it into a string.

// 5. Write a program to check whether a number is an Armstrong number.

// 6. Write a program to find the sum of even and odd digits separately in a number.

// 7. Write a program to check whether a number is a palindrome.

// 8. Write a program to print the Fibonacci series up to n terms.

// 9. Write a program to find the GCD and LCM of two numbers.

function gcd(a, b) {
    if (b == 0) {
        return a
    }
    return gcd(b, a % b)
}

function lcm(a, b) {
    return (a * b) / gcd(a, b)
}

console.log(lcm(4, 6));

// 10. Write a program to find the largest and smallest digits in a number.

// 2. Pattern Programs – 10 Questions
// 1. Print a right-angled triangle star pattern for n rows.
// n=5;
// for(let i=1;i<=n;i++){
//     let row="";
//     for(let j=1;j<=i;j++)
//     {row+="*";

//     }
//     console.log(row);
// }
// 2. Print an inverted right-angled triangle star pattern.
// for(let i=n;i>=1;i--)
// {   let row="";
//     for(let j=1;j<=i;j++)
//     {row+="*";

//     }
//     console.log(row);
// }

// 3. Print a pyramid star pattern.

// n = 5;
// for (let i = 1; i <= n; i++) {
//     let row = "";
//     row += "  ".repeat(n - i);
//     row += "* ".repeat((i * 2 - 1));
//     console.log(row);
// }


// 4. Print a diamond star pattern.

// n = 5;
// for (let i = 1; i <= n; i++) {
//     let row = "";
//     row += "  ".repeat(n - i);
//     row += "* ".repeat((i * 2 - 1));
//     console.log(row);
// }
// for (let i = n-1; i >= 1; i--) {
//     let row = "";
//     row += "  ".repeat(n - i);
//     row += "* ".repeat((i * 2 - 1));
//     console.log(row);
// }




// 5. Print a hollow square star pattern.
// n=5;
// for(i=1;i<=n;i++){
//     let row="";
//     for(j=1;j<=n;j++){
//         if(i==1||i==n||j==1||j==n){
//             row+="* ";
//         }
//         else{
//             row+="  ";
//         }

//     }
//     console.log(row);
// }
// 6. Print the following number pattern for n rows:
// 1
// 12
// 123
// 1234
// 12345


// 7. Print the following repeated-number pattern:
// 1
// 22
// 333
// 4444
// 55555


// 8. Print a triangle with consecutive numbers:
// 1
// 2 3
// 4 5 6
// 7 8 9 10


// 9. Print a binary triangle using 0 and 1.
let n = 5; 

// Store pattern output 
let output = ""; 

// Loop through rows 
for (let i = 1; i <= n; i++) { 

  // Print pattern values 
  for (let j = 1; j <= i; j++) { 

    // Add 0 or 1 based on even or odd sum 
    output += (i + j) % 2 + " "; 
  } 

  // Move to next line after each row 
  output += "\n"; 
} 

console.log(output); 
// 10. Print a palindromic number pyramid.

function generatePalindromicPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let rowStr = "";

        // 1. Add leading spaces for centering
        for (let space = 1; space <= rows - i; space++) {
            rowStr += " ";
        }

        // 2. Add increasing numbers from 1 up to i
        for (let num = 1; num <= i; num++) {
            rowStr += num;
        }

        // 3. Add decreasing numbers from i-1 down to 1
        for (let num = i - 1; num >= 1; num--) {
            rowStr += num;
        }

        console.log(rowStr);
    }
}

// Generate a 5-row pyramid
generatePalindromicPyramid(5);


// 3. Array Programs – 10 Questions
// 1. Find the second-largest distinct element in an array without using sort().



// 2. Remove duplicate elements from an array without using Set.
// 3. Find the missing number in an array containing numbers from 1 to n.
// 4. Find all duplicate elements in an array.
// 5. Move all zeros to the end of an array without changing the order of other elements.


// 6. Find the common elements between two arrays.


// 7. Merge two arrays and remove duplicate elements.
// 8. Count the frequency of each element in an array.
// 9. Find all pairs of elements whose sum equals a given target.
// 10. Sort an array in ascending order without using sort().
// 4. String Programs – 10 Questions
// 1. Reverse a string without using reverse().
// 2. Check whether a string is a palindrome.
// 3. Count vowels, consonants, digits, and special characters in a string.


// 4. Find the first non-repeating character in a string.


// 5. Count the frequency of each character in a string.
// 6. Remove duplicate characters from a string without using Set.
// 7. Check whether two strings are anagrams.
// 8. Reverse each word in a sentence without changing the word order.
// 9. Find the longest word in a sentence.
// 10. Find the most frequently occurring character in a string.
// 5. Object-based Programs – 10 Questions
// 1. Given an array of student objects, find the student who scored the highest mark.
// 2. Given an array of employee objects, display employees whose salary is greater than ₹30,000.
// 3. Calculate the total price of all products in an array of product objects.
// 4. Group students according to their department.
// 5. Count the number of employees in each department.
// 6. Find duplicate employee IDs in an array of employee objects.
// 7. Sort an array of student objects by marks without using sort().
// 8. Convert an array of student objects into an object using student IDs as keys.
// 9. Find the most expensive product in an array of product objects.
// 10. Merge two objects and combine their properties into a new object.
// 6. map(), filter(), and reduce() – 10 Questions
// 1. Use map() to return the square of every number in an array.
// 2. Use map() to extract employee names from an array of employee objects.
// 3. Use filter() to find all numbers divisible by both 3 and 5.
// 4. Use filter() to find students who scored above 75.
// 5. Use reduce() to calculate the sum of all numbers in an array.
// 6. Use reduce() to find the largest number in an array.
// 7. Use filter() and map() to return the squares of all even numbers.
// 8. Use filter() and reduce() to calculate the sum of numbers greater than 10.
// 9. Use reduce() to calculate the total price of products in a shopping cart.
// 10. Use map(), filter(), and reduce() to calculate the total salary of employees in a specific department whose salary exceeds ₹25,000.