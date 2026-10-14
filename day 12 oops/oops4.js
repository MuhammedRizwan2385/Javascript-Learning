class Bank {
    db = {
        1000: { "acno": 1000, "username": "Neer", "password": 1000, "balance": 5000, transaction: [] },
        1001: { "acno": 1001, "username": "Laisha", "password": 1001, "balance": 5000, transaction: [] },
        1002: { "acno": 1002, "username": "Vyom", "password": 1002, "balance": 3000, transaction: [] },
    }

    //1 create a function for validate account number. To validate account check
    //if account number in db return true otherwise return false
    validateAccount(acno) {
        return acno in this.db ? true : false;

    }


    //2 create a function for authenticate user using account number and password 
    //if both are in db then print 'access granted' otherwise print 'permission denied'
    //authenticated(acno,pswd)?access granted else permission denied
    authenticated(acno, pswd) {
        if (this.validateAccount(acno)) {
            this.actualpswd = this.db[acno].password;

            if (pswd ==this.actualpswd) {
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

    getbalance(acno, pswd) {
        if (this.authenticated(acno, pswd)) {
            console.log(this.db[acno].balance);
        }

    }


    //fundtransfer(fromacno,toacno,amount)
    fundtransfer(fromacno, toacno, amount) {

        if (this.validateAccount(fromacno) && this.validateAccount(toacno)) {
            if (this.db[fromacno].balance >= amount) {

                if (amount <= 0) {
                    console.log("Invalid amount");
                }
                else {
                    this.db[toacno].balance += amount;
                    this.db[fromacno].balance -= amount;
                    this.db[fromacno].transaction.push({ "to": toacno, "type": "debit", "amount": amount });
                    this.db[toacno].transaction.push({ "from": fromacno, "type": "credit", "amount": amount });
                    console.log("Amount is transfered successfully");
                }

            }
            else {
                console.log("Transaction failed.Insufficient balance");

            }
        }

    }
}

b1 = new Bank();
console.log(b1.validateAccount(1003));
console.log(b1.validateAccount(1000));
b1.authenticated(1000, 1006)
b1.getbalance(1002, "1002");


b1.fundtransfer(1000, 1002, 1000);
b1.fundtransfer(1002, 1000, 2000);
b1.getbalance(1000,1000);
b1.getbalance(1002,1002);



/*This function should:
1. Validate both account numbers.
2. Check whether the sender has sufficient balance.
3. Deduct the amount from the sender.
4. Add the amount to the receiver.
5. Record the transaction in both accounts.*/