db = {
    1000: { "acno": 1000, "username": "Neer", "password": 1000, "balance": 5000, transaction: [] },
    1001: { "acno": 1001, "username": "Laisha", "password": 1001, "balance": 5000, transaction: [] },
    1002: { "acno": 1002, "username": "Vyom", "password": 1002, "balance": 3000, transaction: [] },
}

//1 create a function for validate account number. To validate account check
//if account number in db return true otherwise return false



function validateAccount(acno) {
    return acno in db ? true : false;

}
console.log(validateAccount(1003));
console.log(validateAccount(1000));

//2 create a function for authenticate user using account number and password 
//if both are in db then print 'access granted' otherwise print 'permission denied'
//authenticated(acno,pswd)?access granted else permission denied
function authenticated(acno, pswd) {
    if (validateAccount(acno)) {
        actualpswd = db[acno].password;

        if (pswd == actualpswd) {
            console.log("access granted");
            return true;
        }
        else {
            console.log("invalid password");
            return false;
        }

    }
    else {
        console.log("Invalid ACNO")
        return false;
    }
}

// getbalance(acno)

function getbalance(acno, pswd) {
    if (authenticated(acno, pswd)) {
        console.log(db[acno].balance);
    }

}
getbalance(1002, "1002");

//fundtransfer(fromacno,toacno,amount)
function fundtransfer(fromacno, toacno, amount) {

    if (validateAccount(fromacno) && validateAccount(toacno)) {
        if (db[fromacno].balance >=amount) {

            if (amount <= 0) {
                console.log("Invalid amount");
            }
            else {
                db[toacno].balance += amount;
                db[fromacno].balance -= amount;
                db[fromacno].transaction.push({ "to": toacno,"type":"debit", "amount": amount });
                db[toacno].transaction.push({ "from": fromacno,"type":"credit", "amount": amount });
                console.log("Amount is transfered successfully");
            }

        }
        else {
            console.log("Transaction failed.Insufficient balance");

        }
    }

}

fundtransfer(1000, 1002, 1000);
console.log(db);
fundtransfer(1002, 1000, 2000);
console.log(db);
console.log(db[1000].transaction);
console.log(db[1002].transaction);



/*This function should:
1. Validate both account numbers.
2. Check whether the sender has sufficient balance.
3. Deduct the amount from the sender.
4. Add the amount to the receiver.
5. Record the transaction in both accounts.*/