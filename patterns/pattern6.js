// Hollow Left-Aligned Triangle Star Pattern
/*
Enter rows for Hollow Left-Aligned Triangle: 5
        * 
      * * 
    *   * 
  *     * 
* * * * * 

=== Code Execution Successful ===
*/

n=5;


for(let i = 1; i <= n; i++) {
    let row = " ".repeat((n - i) * 2); // Space before stars
    for(let j = 1; j <= i; j++) {
        if(j === 1 || j === i || i === n) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}