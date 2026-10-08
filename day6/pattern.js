// write a program to print the following pattern
/*
input 2
2
22
input 3
3
33
333
input 4
4
44
444
4444
*/

// var input = 3;
// var i = 1;
// var str = "";
// while (i <= input) {
//     str += input;
//     console.log(str);
//     i++;
// }

// write a program to print the following pattern using nested loop

/* 
1111
2222
3333
4444
*/

// for (row = 1; row <= 4; row++) {
//     str = "";
//     for (column = 1; column <= 4; column++) {
//         str += row;
//     }
//     console.log(str);
// }

// write a program to print the following pattern using nested loop

/* 
####
####
####
####
*/

// for (row = 1; row <= 4; row++) {
//     str = "";
//     for (column = 1; column <= 4; column++) {
//         str +='#';
//     }
//     console.log(str);
// }

// write a program to print the following pattern using nested loop

/* 
*
**
***
****
*/

for (row = 1; row <= 4; row++) {
    str = "";
    for (column = 1; column <=row; column++) {
        str +='*';
    }
    console.log(str);
}
