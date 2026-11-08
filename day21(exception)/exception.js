
// // // // try catch finally

expr = '/23*76+97';
try {
    console.log('try block');
    console.log(eval(expr));
}
catch {
    console.log('catch block');
    console.log('error');

    // expr='23*76+97';
    // console.log(eval(expr))

    // //  // runtime error solve
}

finally {
    console.log('finally block');
    console.log('Always executed');
}
console.log('Data Transmitted:' + eval(expr));