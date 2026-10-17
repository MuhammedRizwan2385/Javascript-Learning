//Left-Aligned Triangle Star Pattern
/*
Enter rows for Left-Aligned Triangle: 5
        * 
      * * 
    * * * 
  * * * * 
* * * * * 

=== Code Execution Successful ===
*/

n = 5;
for (i = 1; i <= n; i++) {
    row = "";
    row += " ".repeat((n - i)*2);
    row += "* ".repeat(i);
    console.log(row);
}