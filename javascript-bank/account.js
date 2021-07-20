/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var positive = false;
  var depositObject = new Transaction();
  if (amount > 0 && amount % 1 === 0) {
    positive = true;
    depositObject.type = 'deposit';
    depositObject.amount = amount;
    this.transactions.push(depositObject);
  }
  return positive;
};

Account.prototype.withdraw = function (amount) {
  var positive = false;
  var withdrawObject = new Transaction();
  if (amount > 0 && amount % 1 === 0) {
    positive = true;
    withdrawObject.type = 'withdrawal';
    withdrawObject.amount = amount;
    this.transactions.push(withdrawObject);
  }
  return positive;
};

Account.prototype.getBalance = function () {
  var balance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      balance = balance + this.transactions[i].amount;
    } else {
      balance = balance - this.transactions[i].amount;
    }
  }
  return balance;
};
