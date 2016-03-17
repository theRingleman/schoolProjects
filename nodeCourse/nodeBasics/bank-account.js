var account = {
  balance: 0,
  // deposit function
  deposit: function(amount){
    this.balance += amount;
  },
  // withdraw function
  withdraw: function(amount){
    this.balance -= amount;
  },
  // print out the balance of the account
  getBalance: function(){
    console.log(this.balance);
  }
};

account.getBalance();
account.deposit(500);
account.withdraw(50);
account.getBalance();
account.withdraw(25);
account.getBalance();
account.deposit(2500);
account.getBalance();
