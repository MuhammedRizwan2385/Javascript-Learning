// Print a diamond star pattern

n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
    row += "  ".repeat(n - i);
    row += "* ".repeat((i * 2 - 1));
    console.log(row);
}
for (let i = n-1; i >= 1; i--) {
    let row = "";
    row += "  ".repeat(n - i);
    row += "* ".repeat((i * 2 - 1));
    console.log(row);
}
