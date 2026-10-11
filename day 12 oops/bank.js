class Bank{
    createAcc(acno,name,balance,phnno){
        this.acno=acno;
        this.name=name;
        this.balance=balance;
        this.phnno=phnno;
        console.log("account created");
    }
    deposit(amount){
        this.balance=this.balance+amount;
        console.log(`${amount} credited to your account successfully`);
    }
    withdraw(amount)
    {
        if(amount>this.balance){
            console.log("Transaction Failed insufficient balance");
        }
        else{
            this.balance=this.balance-amount;
           console.log(`${amount} debited from your account successfully`);
        }
    }
    balanceEnquiry(){
        console.log(`Your account balance is ${this.balance}`);
    }
}

b=new Bank();
b.createAcc(104201,"M Muhammed Rizwan",15000,8606116639);
b.balanceEnquiry();
b.deposit(25000);
b.balanceEnquiry();
b.withdraw(10000);
b.balanceEnquiry();
b.withdraw(31000);
b.balanceEnquiry();
