var accounts = [];

// account object
// balance
// username

//createAccount(account)
// push onto accounts array
// return account

// getAccount(username)
// find matching account using forEach()

function deposit(account, amount) {
  account.balance += amount;
}

function withdraw(account, amount) {
  account.balance -= amount;
}

function getBalance(account) {
  return account.balance;
}

function createAccount(account, balance) {
  var newAccount = {
    username: account,
    balance: balance
  };
  accounts.push(newAccount);
  return newAccount;
}

function getAccount(username) {
  var matchedAccount;
  accounts.forEach(function (account) {
    if (account.username === username) {
      matchedAccount = account;
    }
  });
  return matchedAccount;
}

var samsAccount = createAccount("theRingleman", 1000);
console.log(samsAccount);
deposit(samsAccount, 221);
withdraw(samsAccount, 19);
console.log(samsAccount.balance);
console.log(accounts);
