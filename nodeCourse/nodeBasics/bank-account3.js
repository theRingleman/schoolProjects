var accounts = [];

function deposit(account, amount) {
  // only accept number use typeof
  if (typeof amount === 'number') {
    account.balance += amount;
  } else {
    console.log("Sorry you must enter a number.");
  }
}

function withdraw(account, amount) {
  // only accept number use typeof
  if (typeof amount === 'number') {
    account.balance -= amount;
  } else {
    console.log("Sorry you must enter a number.");
  }
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
  // use a for loop or while loop
  for (var i = 0; i < accounts.length; i++) {
    if (accounts[i].username === username) {
      matchedAccount = accounts[i];
    }
  }
  return matchedAccount;
}

// createBalanceGetter(account)
//   return funtion ()
//     return account.balance
function createBalanceGetter(account) {
  return function () {
    return account.balance;
  }
}

var samsAccount = createAccount("theRingleman", 1000);
var gwensAccount = createAccount('gwendy', 4000);

console.log(getAccount('theRingleman'));
console.log(getAccount('gwendy'));

deposit(samsAccount, 200);
withdraw(samsAccount, 25);//1175

deposit(gwensAccount, 4500);
withdraw(gwensAccount, 2000);//6500

console.log(getAccount('theRingleman'));
console.log(getAccount('gwendy'));

var gwenBalance = createBalanceGetter(gwensAccount);
console.log(gwenBalance());
