//   Print a pyramid star pattern.

// Enter rows for Pyramid Pattern:  5
//         * 
//       * * * 
//     * * * * * 
//   * * * * * * * 
// * * * * * * * * * 

// === Code Execution Successful ===


n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
    row += "  ".repeat(n - i);
    row += "* ".repeat((i * 2 - 1));
    console.log(row);
}