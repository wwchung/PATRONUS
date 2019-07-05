let firstName = 'Sam';
let lastName = 'Caprice';

let fullNameObj = document.getElementById('full-name');
fullNameObj.innerHTML = `${firstName} ${lastName}`;

// Accounts data
let accounts = [
  {
    'name': 'Statement Savings x8466',
    'available': 0.00,
    'ledger': 0.00,
    'transactions': []
  },
  {
    'name': 'No Product Desc x8888',
    'available': 203193.00,
    'ledger': 254764.00,
    'transactions': [
      {
        'account': 'No Product Desc x8888',
        'status': 'Posted',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/03/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Posted',
        'type': 'Detail Deposits',
        'amount': 193598.92,
        'date': '07/03/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Posted',
        'type': 'ZBA Debits',
        'amount': -178652.27,
        'date': '07/03/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Posted',
        'type': 'Lockbox Deposits',
        'amount': 27504.60,
        'date': '07/03/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Posted',
        'type': 'Lockbox Deposits',
        'amount': 14435.00,
        'date': '07/03/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Posted',
        'type': 'Money Transfer CR-Wire',
        'amount': 10390.00,
        'date': '07/03/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Posted',
        'type': 'Miscellaneous Credits',
        'amount': 8460.00,
        'date': '07/03/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Posted',
        'type': 'Miscellaneous Credits',
        'amount': 1850.00,
        'date': '07/03/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Posted',
        'type': 'ACH Debits',
        'amount': -1705.35,
        'date': '07/03/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Posted',
        'type': 'ACH Credits',
        'amount': 100.00,
        'date': '07/03/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Posted',
        'type': 'Money Transfer DB - Other',
        'amount': -100.00,
        'date': '07/03/2019'
      }
    ]
  },
  {
    'name': 'No Product Desc x9999',
    'available': 203193.00,
    'ledger': 254764.00,
    'transactions': [
      {
        'account': 'No Product Desc x9999',
        'status': 'Posted',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/03/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Posted',
        'type': 'Detail Deposits',
        'amount': 193598.92,
        'date': '07/03/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Posted',
        'type': 'ZBA Debits',
        'amount': -178652.27,
        'date': '07/03/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Posted',
        'type': 'Lockbox Deposits',
        'amount': 27504.60,
        'date': '07/03/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Posted',
        'type': 'Lockbox Deposits',
        'amount': 14435.00,
        'date': '07/03/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Posted',
        'type': 'Money Transfer CR-Wire',
        'amount': 10390.00,
        'date': '07/03/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Posted',
        'type': 'Miscellaneous Credits',
        'amount': 8460.00,
        'date': '07/03/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Posted',
        'type': 'Miscellaneous Credits',
        'amount': 1850.00,
        'date': '07/03/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Posted',
        'type': 'ACH Debits',
        'amount': -1705.35,
        'date': '07/03/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Posted',
        'type': 'ACH Credits',
        'amount': 100.00,
        'date': '07/03/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Posted',
        'type': 'Money Transfer DB - Other',
        'amount': -100.00,
        'date': '07/03/2019'
      }
    ]
  },
  {
    'name': 'No Product Desc x08',
    'available': null,
    'ledger': null,
    'transactions': []
  },
  {
    'name': 'Statement Savings x0329',
    'available': null,
    'ledger': null,
    'transactions': []
  },
  {
    'name': 'No Product Desc x1091',
    'available': null,
    'ledger': null,
    'transactions': []
  }
];

// Create accountAll data
let availableAll = 0;
let ledgerAll = 0;
let transactionsAll = [];

accounts.forEach(function(account) {
  availableAll += account.available;
  ledgerAll += account.ledger;
  transactionsAll = transactionsAll.concat(account.transactions);
});

//console.log(availableAll);
//console.log(ledgerAll);
//console.log(transactionsAll);

let accountAll = {};
accountAll.name = 'ALL ACCOUNTS';
accountAll.available = availableAll;
accountAll.ledger = ledgerAll;
accountAll.transactions = transactionsAll;

// Add accountAll to beginning of accounts array
accounts.unshift(accountAll);

function formatAmount(amount) {
  return `$${amount.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
}

function createAccountIconObj() {
  let accountIconObj = document.createElement('img');
  accountIconObj.className = 'icon';
  accountIconObj.src = 'images/account-default.svg';
  return accountIconObj;
}

function createAccountAvailableObj(account) {
  let accountAvailableObj = document.createElement('h4');
  if (account.available === null) {
    accountAvailableObj.innerHTML = '---';
  } else {
    accountAvailableObj.innerHTML = formatAmount(account.available);
  }
  return accountAvailableObj;
}

function createAccountNameObj(account) {
  let accountNameObj = document.createElement('h5');
  accountNameObj.innerHTML = account.name;
  return accountNameObj;
}

function createAccountObj(accountIconObj, accountAvailableObj, accountNameObj) {
  let accountObj = document.createElement('div');
  accountObj.className = 'account';
  accountObj.appendChild(accountIconObj);
  accountObj.appendChild(accountAvailableObj);
  accountObj.appendChild(accountNameObj);
  return accountObj;
}

// Add account objects to container
let accountContainerObj = document.getElementById('account-container');
for (let i = 0; i < accounts.length; i++) {
  let accountIconObj = createAccountIconObj();
  let accountAvailableObj = createAccountAvailableObj(accounts[i]);
  let accountNameObj = createAccountNameObj(accounts[i]);
  
  if (i == 0) {
    accountIconObj.src = 'images/account-all.svg';
    accountAvailableObj.id = 'amount-all';
  }
  
  let accountObj = createAccountObj(accountIconObj, accountAvailableObj, accountNameObj);
  
  if (i == 0) {
    accountObj.id = 'account-all';
  }
  
  accountContainerObj.appendChild(accountObj);
}

// Add click event listener to account objects
let amountInObj = document.getElementById('amount-in');
let amountOutObj = document.getElementById('amount-out');

let accountNameObj = document.getElementById('account-name');
let amountAvailableObj = document.getElementById('amount-available');
let amountLedgerObj = document.getElementById('amount-ledger');
let leftObj = document.getElementById('left');

function createTrObj(transaction) {
  let trObj = document.createElement('tr');
  
  let tdIconObj = document.createElement('td');
  let tdIconImgObj = document.createElement('img');
  tdIconImgObj.className = 'td-icon';
  
  let tdAccountObj = document.createElement('td');
  let tdAccountAObj = document.createElement('a');
  tdAccountAObj.innerHTML = transaction.account;
  tdAccountObj.appendChild(tdAccountAObj);
  
  let tdStatusObj = document.createElement('td');
  tdStatusObj.innerHTML = transaction.status;
  
  let tdTypeObj = document.createElement('td');
  tdTypeObj.innerHTML = transaction.type;
  
  let tdAmountObj = document.createElement('td');
  
  let tdDateObj = document.createElement('td');
  tdDateObj.innerHTML = transaction.date;
  
  let tdViewObj = document.createElement('td');
  let tdViewAObj = document.createElement('a');
  tdViewAObj.innerHTML = 'VIEW';
  tdViewObj.appendChild(tdViewAObj);
  
  if (transaction.amount < 0) {
    tdIconImgObj.src = 'images/out.svg';
    tdAmountObj.innerHTML = `(${formatAmount(Math.abs(transaction.amount))})`;
  } else if (transaction.amount > 0) {
    tdIconImgObj.src = 'images/in.svg';
    tdAmountObj.innerHTML = formatAmount(transaction.amount);
  }
  
  tdIconObj.appendChild(tdIconImgObj);
  
  trObj.appendChild(tdIconObj);
  trObj.appendChild(tdAccountObj);
  trObj.appendChild(tdStatusObj);
  trObj.appendChild(tdTypeObj);
  trObj.appendChild(tdAmountObj);
  trObj.appendChild(tdDateObj);
  trObj.appendChild(tdViewObj);
  
  return trObj;
}

function selectAccount(curr) {
  let tableObj = document.getElementById('transaction-container');
  if (tableObj !== null) {
    leftObj.removeChild(tableObj);
  }
  let noTransactionObj = document.getElementById('no-transaction');
  if (noTransactionObj !== null) {
    leftObj.removeChild(noTransactionObj);
  }
  
  let newTableObj = document.createElement('table');
  newTableObj.id = 'transaction-container';
  let trObj = document.createElement('tr');
  let thIconObj = document.createElement('th');
  let thAccountObj = document.createElement('th');
  thAccountObj.innerHTML = 'ACCOUNT';
  let thStatusObj = document.createElement('th');
  thStatusObj.innerHTML = 'STATUS';
  let thTypeObj = document.createElement('th');
  thTypeObj.innerHTML = 'TYPE';
  let thAmountObj = document.createElement('th');
  thAmountObj.innerHTML = 'AMOUNT';
  let thDateObj = document.createElement('th');
  thDateObj.innerHTML = 'DATE';
  let thViewObj = document.createElement('th');
  
  trObj.appendChild(thIconObj);
  trObj.appendChild(thAccountObj);
  trObj.appendChild(thStatusObj);
  trObj.appendChild(thTypeObj);
  trObj.appendChild(thAmountObj);
  trObj.appendChild(thDateObj);
  trObj.appendChild(thViewObj);
  
  newTableObj.appendChild(trObj);
  leftObj.appendChild(newTableObj);
  
  accountNameObj.innerHTML = accounts[curr].name;
  
  if (accounts[curr].available === null) {
    amountAvailableObj.innerHTML = '---';
  } else {
    amountAvailableObj.innerHTML = formatAmount(accounts[curr].available);
  }
  
  if (accounts[curr].ledger === null) {
    amountLedgerObj.innerHTML = '---';
  } else {
    amountLedgerObj.innerHTML = formatAmount(accounts[curr].ledger);
  }
  
  let amountIn = 0;
  let amountOut = 0;
  
  if (accounts[curr].transactions.length === 0) {
    let newNoTransactionObj = document.createElement('p');
    newNoTransactionObj.id = 'no-transaction';
    newNoTransactionObj.innerHTML = 'The data is not currently available.';
    leftObj.appendChild(newNoTransactionObj);
  } else {
    accounts[curr].transactions.forEach(function(transaction) {
      newTableObj.appendChild(createTrObj(transaction));
      
      if (transaction.amount > 0) {
        amountIn += transaction.amount;
      } else {
        amountOut += transaction.amount;
      }
    });
  }
  
  amountInObj.innerHTML = formatAmount(amountIn);
  amountOutObj.innerHTML = formatAmount(Math.abs(amountOut));
}

let accountObjs = document.getElementsByClassName('account');

for (let i = 0; i < accountObjs.length; i++) {
  accountObjs[i].addEventListener('click', function() {    
    if (i == 0) {
      if (curr != i) {
        accountObjs[curr].classList.remove('account-selected');
        accountObjs[i].classList.add('account-all-selected');
      }
    } else {
      if (curr == 0) {
        accountObjs[curr].classList.remove('account-all-selected');
      } else {
        accountObjs[curr].classList.remove('account-selected');
      }
      accountObjs[i].classList.add('account-selected');
    }
    
    curr = i;
    selectAccount(curr);
  });
}

// Initial selected account
let curr = 0;
accountObjs[curr].classList.add('account-all-selected');
selectAccount(curr);

//let tasks = [
//  {
//    'name': 'Make a payment to John',
//    'details': 'XYZ Company ∙ $5,000',
//    'due': '07/01/2019'
//  },
//  {
//    'name': 'ACH Transfer to XYZ',
//    'details': 'ABC Company ∙ $10,000',
//    'due': '07/02/2019'
//  },
//  {
//    'name': 'Approve payments',
//    'details': '',
//    'due': ''
//  }
//];
//
//let taskContainerObj = document.getElementById('task-container');
//
//for (let i = 0; i < tasks.length; i++) {
//  let task = tasks[i];
//  
//  let numObj = document.createElement('h4');
//  numObj.className = 'task__num';
//  numObj.innerHTML = `TASK ${i + 1}`;
//  
//  let nameObj = document.createElement('h3');
//  nameObj.className = 'task__name';
//  nameObj.innerHTML = task.name;
//  
//  let detailsObj = document.createElement('p');
//  detailsObj.className = 'task__details';
//  detailsObj.innerHTML = task.details;
//  
//  let dueObj = document.createElement('p');
//  dueObj.className = 'task__due';
//  dueObj.innerHTML = task.due;
//  
//  let taskObj = document.createElement('div');
//  taskObj.className = 'task';
//  
//  taskObj.appendChild(numObj);
//  taskObj.appendChild(nameObj);
//  taskObj.appendChild(detailsObj);
//  taskObj.appendChild(dueObj);
//  
//  taskContainerObj.appendChild(taskObj);
//}