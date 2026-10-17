/*
problem 2: Hollow Right-Angled Triangle Star Pattern
Enter rows for Hollow Right-Angled Triangle: 5
* 
* * 
*   * 
*     * 
* * * * * 

=== Code Execution Successful ===

*/

n=5;
for(let i=1;i<=n;i++){
    let row=""
    for(let j=1;j<=i;j++){
         // Print star only at the border or the last row
        if(j===1||i===j||i===n)
        {row+="*";

        }
        else{
            row+=" ";
        }
    }
    console.log(row);
}