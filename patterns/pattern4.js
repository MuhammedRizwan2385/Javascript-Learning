//Hollow Inverted Right-Angled Triangle Star Pattern 

/*
Enter rows for Hollow Inverted Right-Angled Triangle: 6
* * * * * * 
*       * 
*     * 
*   * 
* * 
* 

=== Code Execution Successful ===
*/

n=6;
for(let i=n;i>=1;i--)
{   let row="";
    for(let j=1;j<=i;j++)
    {  if(i==n||j==1||j==i)
        {
        row+="*";
        }
        else{
            row+=" ";
        }
    }
    console.log(row);
}
