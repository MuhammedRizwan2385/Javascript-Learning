// Enter size for Hollow Square Pattern: 5
// * * * * * 
// *       * 
// *       * 
// *       * 
// * * * * * 

// === Code Execution Successful ===

n=5;
for(i=1;i<=n;i++){
    let row="";
    for(j=1;j<=n;j++){
        if(i==1||i==n||j==1||j==n){
            row+="* ";
        }
        else{
            row+="  ";
        }

    }
    console.log(row);
}

