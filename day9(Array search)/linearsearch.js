// linear search

// function linearSearch(array, target) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == target) {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(linearSearch([4, 5, 6, 8], 8));

// linear search in strings
var rainbow=["red","orange","yellow","green","blue","indigo","violet"];


function linearSearch(rainbow, target) {
    for(let i in rainbow) {
        if (rainbow[i]== target) {
            return i;
        }
    }
    return null;
}
console.log(linearSearch(rainbow,"green"));
console.log(linearSearch(rainbow,"white"));