let firstName = 'Sam';
let lastName = 'Caprice';

let fullNameObj = document.getElementById('full-name');
fullNameObj.innerHTML = `${firstName} ${lastName}`;

let h1Obj = document.getElementsByTagName('h1')[0];
h1Obj.innerHTML = `Hi ${firstName}.`;


// ----- QUICK HELP ----- //

let helpObj = document.getElementById('help');
let helpIconObj = document.getElementById('help-icon')
let helpCloseIconObj = document.getElementById('help-close-icon');
let helpContainerObj = document.getElementsByClassName('help-container')[0];

function toggleHelp() {
  helpIconObj.classList.toggle('hidden');
  helpCloseIconObj.classList.toggle('hidden');
  helpContainerObj.classList.toggle('help-container-visible');
}

// Help button
helpObj.addEventListener('click', function() {
  toggleHelp();
});

// Help link in side nav
let helpItemObj = document.getElementById('help-item');
helpItemObj.addEventListener('click', function() {
  toggleMenu();
  toggleHelp();
});


// ----- SIDE NAV ----- //

let menuObj = document.getElementById('menu');
let menuIconObj = document.getElementById('menu-icon');
let menuCloseIconObj = document.getElementById('menu-close-icon');
let sideNavObj = document.getElementsByClassName('side-nav')[0];
let mainOverlayObj = document.getElementsByClassName('main-overlay')[0];

function toggleMenu() {
  menuIconObj.classList.toggle('hidden');
  menuCloseIconObj.classList.toggle('hidden');
  sideNavObj.classList.toggle('side-nav-visible');
  mainOverlayObj.classList.toggle('main-overlay-visible');
}

// Menu button
menuObj.addEventListener('click', function() {
  toggleMenu();
  
  // Close help
  if (helpContainerObj.classList.contains('help-container-visible')) {
    toggleHelp();
  }
});


// ----- ACCOUNTS DATA ----- //

let accounts = [
  {
    'name': 'Residential x8901',
    'tasks': [],
    'postedAvailable': 0.00,
    'postedLedger': 0.00,
    'postedTransactions': [],
    'pendingAvailable': -493.54,
    'pendingLedger': -493.54,
    'pendingTransactions': [
      {
        'account': 'Residential x8901',
        'status': 'Pending',
        'type': 'Money Transfer DB - Other',
        'amount': -500.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Residential x8901',
        'status': 'Pending',
        'type': 'Money Transfer CR - Other',
        'amount': 6.28,
        'date': '07/05/2019'
      },
      {
        'account': 'Residential x8901',
        'status': 'Pending',
        'type': 'Money Transfer CR - Other',
        'amount': 1.50,
        'date': '07/05/2019'
      },
      {
        'account': 'Residential x8901',
        'status': 'Pending',
        'type': 'Money Transfer DB - Other',
        'amount': -1.25,
        'date': '07/05/2019'
      },
      {
        'account': 'Residential x8901',
        'status': 'Pending',
        'type': 'Money Transfer CR - Other',
        'amount': 1.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Residential x8901',
        'status': 'Pending',
        'type': 'Money Transfer DB - Other',
        'amount': -1.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Residential x8901',
        'status': 'Pending',
        'type': 'Money Transfer DB - Other',
        'amount': -0.10,
        'date': '07/05/2019'
      },
      {
        'account': 'Residential x8901',
        'status': 'Pending',
        'type': 'Money Transfer CR - Other',
        'amount': 0.03,
        'date': '07/05/2019'
      },
      {
        'account': 'Residential x8901',
        'status': 'Pending',
        'type': 'Money Transfer CR - Other',
        'amount': 0.02,
        'date': '07/05/2019'
      },
      {
        'account': 'Residential x8901',
        'status': 'Pending',
        'type': 'Money Transfer DB - Other',
        'amount': -0.02,
        'date': '07/05/2019'
      }
    ]
  },
  {
    'name': 'Payroll x0123',
    'tasks': [
      {
        'name': 'Make a payment to John',
        'details': 'XYZ Company ∙ $5,000',
        'due': '07/01/2019 ∙ 2:00pm',
        'recurring': true,
        'tag': 'alert'
      },
      {
        'name': 'ACH Transfer to XYZ',
        'details': 'XYZ Company ∙ $1,250',
        'due': '07/07/2019',
        'recurring': true,
        'tag': 'attention'
      },
      {
        'name': 'Assign user X to team Y',
        'details': '',
        'due': '07/09/2019',
        'recurring': false,
        'tag': 'company'
      }
    ],
    'postedAvailable': 203193.00,
    'postedLedger': 254764.00,
    'postedTransactions': [
      {
        'account': 'Payroll x0123',
        'status': 'Posted',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/04/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Posted',
        'type': 'Detail Deposits',
        'amount': 193598.92,
        'date': '07/04/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Posted',
        'type': 'ZBA Debits',
        'amount': -178652.27,
        'date': '07/04/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Posted',
        'type': 'Lockbox Deposits',
        'amount': 27504.60,
        'date': '07/04/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Posted',
        'type': 'Lockbox Deposits',
        'amount': 14435.00,
        'date': '07/04/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Posted',
        'type': 'Money Transfer CR - Wire',
        'amount': 10390.00,
        'date': '07/04/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Posted',
        'type': 'Miscellaneous Credits',
        'amount': 8460.00,
        'date': '07/04/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Posted',
        'type': 'Miscellaneous Credits',
        'amount': 1850.00,
        'date': '07/04/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Posted',
        'type': 'ACH Debits',
        'amount': -1705.35,
        'date': '07/04/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Posted',
        'type': 'ACH Credits',
        'amount': 100.00,
        'date': '07/04/2019'
      }
    ],
    'pendingAvailable': 5714448.67,
    'pendingLedger': 6235440.67,
    'pendingTransactions': [
      {
        'account': 'Payroll x0123',
        'status': 'Pending',
        'type': 'Money Transfer CR - Wire',
        'amount': 6660995.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      }
    ]
  },
  {
    'name': 'Commercial x9012',
    'tasks': [],
    'postedAvailable': 203193.00,
    'postedLedger': 254764.00,
    'postedTransactions': [
      {
        'account': 'Commercial x9012',
        'status': 'Posted',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/04/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Posted',
        'type': 'Detail Deposits',
        'amount': 193598.92,
        'date': '07/04/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Posted',
        'type': 'ZBA Debits',
        'amount': -178652.27,
        'date': '07/04/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Posted',
        'type': 'Lockbox Deposits',
        'amount': 27504.60,
        'date': '07/04/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Posted',
        'type': 'Lockbox Deposits',
        'amount': 14435.00,
        'date': '07/04/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Posted',
        'type': 'Money Transfer CR - Wire',
        'amount': 10390.00,
        'date': '07/04/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Posted',
        'type': 'Miscellaneous Credits',
        'amount': 8460.00,
        'date': '07/04/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Posted',
        'type': 'Miscellaneous Credits',
        'amount': 1850.00,
        'date': '07/04/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Posted',
        'type': 'ACH Debits',
        'amount': -1705.35,
        'date': '07/04/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Posted',
        'type': 'ACH Credits',
        'amount': 100.00,
        'date': '07/04/2019'
      }
    ],
    'pendingAvailable': 5723938.67,
    'pendingLedger': 6234930.67,
    'pendingTransactions': [
      {
        'account': 'Commercial x9012',
        'status': 'Pending',
        'type': 'Money Transfer CR - Wire',
        'amount': 6660995.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      }
    ]
  },
  {
    'name': 'Utilities x7890',
    'tasks': [],
    'postedAvailable': null,
    'postedLedger': null,
    'postedTransactions': [],
    'pendingAvailable': 498.79,
    'pendingLedger': 498.79,
    'pendingTransactions': [
      {
        'account': 'Utilities x7890',
        'status': 'Pending',
        'type': 'Money Transfer CR - Other',
        'amount': 500.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Utilities x7890',
        'status': 'Pending',
        'type': 'Money Transfer CR - Other',
        'amount': 10.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Utilities x7890',
        'status': 'Pending',
        'type': 'Money Transfer DB - Other',
        'amount': -6.28,
        'date': '07/05/2019'
      },
      {
        'account': 'Utilities x7890',
        'status': 'Pending',
        'type': 'Money Transfer DB - Other',
        'amount': -2.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Utilities x7890',
        'status': 'Pending',
        'type': 'Money Transfer DB - Other',
        'amount': -1.50,
        'date': '07/05/2019'
      },
      {
        'account': 'Utilities x7890',
        'status': 'Pending',
        'type': 'Money Transfer DB - Other',
        'amount': -1.50,
        'date': '07/05/2019'
      },
      {
        'account': 'Utilities x7890',
        'status': 'Pending',
        'type': 'Money Transfer CR - Other',
        'amount': 1.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Utilities x7890',
        'status': 'Pending',
        'type': 'Money Transfer DB - Other',
        'amount': -1.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Utilities x7890',
        'status': 'Pending',
        'type': 'Money Transfer CR - Other',
        'amount': 0.10,
        'date': '07/05/2019'
      },
      {
        'account': 'Utilities x7890',
        'status': 'Pending',
        'type': 'Money Transfer DB - Other',
        'amount': -0.03,
        'date': '07/05/2019'
      }
    ]
  },
  {
    'name': 'Checking x1234',
    'tasks': [],
    'postedAvailable': null,
    'postedLedger': null,
    'postedTransactions': [],
    'pendingAvailable': 10.00,
    'pendingLedger': 10.00,
    'pendingTransactions': [
      {
        'account': 'Checking x1234',
        'status': 'Pending',
        'type': 'Money Transfer CR - Other',
        'amount': 10.00,
        'date': '07/05/2019'
      }
    ]
  }
];


// ----- ALL ACCOUNTS DATA ----- //

let tasksAll = [];
let postedAvailableAll = 0;
let postedLedgerAll = 0;
let postedTransactionsAll = [];
let pendingAvailableAll = 0;
let pendingLedgerAll = 0;
let pendingTransactionsAll = [];

accounts.forEach((account) => {
  tasksAll = tasksAll.concat(account.tasks);
  postedAvailableAll += account.postedAvailable;
  postedLedgerAll += account.postedLedger;
  postedTransactionsAll = postedTransactionsAll.concat(account.postedTransactions);
  pendingAvailableAll += account.pendingAvailable;
  pendingLedgerAll += account.pendingLedger;
  pendingTransactionsAll = pendingTransactionsAll.concat(account.pendingTransactions);
});

let accountAll = {};
accountAll.name = 'ALL ACCOUNTS';
accountAll.tasks = tasksAll;
accountAll.postedAvailable = postedAvailableAll;
accountAll.postedLedger = postedLedgerAll;
accountAll.postedTransactions = postedTransactionsAll;
accountAll.pendingAvailable = pendingAvailableAll;
accountAll.pendingLedger = pendingLedgerAll;
accountAll.pendingTransactions = pendingTransactionsAll;

accounts.unshift(accountAll);


// ----- FORMAT AMOUNT ----- //

function formatAmount(amount) {
  if (amount < 0) {
    return `($${Math.abs(amount).toLocaleString(undefined, {minimumFractionDigits: 2})})`;
  } else {
    return `$${amount.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
  }
}


// ----- GLOBAL VARIABLE ----- //

// Selected account index
let curr = 0;

// Posted or pending status
let isPosted = true;


// ----- SWITCH ----- //

let switchInputObj = document.getElementById('switch-input');
switchInputObj.addEventListener('change', function() {
  isPosted = !switchInputObj.checked;
  setAccounts();
});


// ----- ACCOUNT LIST ----- //

let accountContainerObj = document.getElementById('account-container');

function setAccounts() {  
  // Reset account container
  accountContainerObj.innerHTML = '';
  
  // Add account boxes
  for (let i = 0; i < accounts.length; i++) {
    let accountObj = createAccountObj(accounts[i], i === 0);
    accountContainerObj.appendChild(accountObj);
  }
  
  // Add Add Account or Group box
  accountContainerObj.appendChild(createAddAccountObj());
  
  let accountObjs = document.getElementsByClassName('account');
  
  // Add border to current account box
  accountObjs[curr].classList.add('account-selected');
  if (curr === 0) {
    accountObjs[curr].classList.add('account-all-selected');
  }
  
  // Add event listeners except Add Account or Group box
  for (let i = 0; i < accountObjs.length - 1; i++) {
    accountObjs[i].addEventListener('click', function() {
      // Remove border from current account box
      accountObjs[curr].classList.remove('account-selected');
      if (curr === 0) {
        accountObjs[curr].classList.remove('account-all-selected');
      }
      // Add border to selected account box
      accountObjs[i].classList.add('account-selected');
      if (i === 0) {
        accountObjs[i].classList.add('account-all-selected');
      }
      // Update current account box
      curr = i;
      setAccount();
    });
  }
  
  setAccount();
}


// ----- ACCOUNT BOX ----- //

function createAccountObj(account, isAccountAll) {
  let accountObj = document.createElement('div');
  accountObj.className = 'account';
  accountObj.appendChild(createAccountIconObj(isAccountAll));
  accountObj.appendChild(createAccountAvailableObj(account, isAccountAll));
  accountObj.appendChild(createAccountNameObj(account));
  
  if (isAccountAll) {
    accountObj.id = 'account-all';
  }
  return accountObj;
}

function createAccountIconObj(isAccountAll) {
  let accountIconObj = document.createElement('img');
  accountIconObj.className = 'icon';
  accountIconObj.src = isAccountAll ? 'images/account-all.svg' : 'images/account-default.svg';
  return accountIconObj;
}

function createAccountAvailableObj(account, isAccountAll) {
  let accountAvailableObj = document.createElement('h4');
  
  if (isAccountAll) {
    accountAvailableObj.id = 'amount-all';
  }
  
  let available = isPosted ? account.postedAvailable : account.pendingAvailable;
  
  if (available === null) {
    accountAvailableObj.innerHTML = '---';
  } else {
    if (available < 0) {
      accountAvailableObj.className = 'negative';
    }
    accountAvailableObj.innerHTML = formatAmount(available);
  }
  return accountAvailableObj;
}

function createAccountNameObj(account) {
  let accountNameObj = document.createElement('h5');
  accountNameObj.innerHTML = account.name;
  return accountNameObj;
}

function createAddAccountObj() {
  let addAccountIconObj = document.createElement('img');
  addAccountIconObj.id = 'add-icon';
  addAccountIconObj.className = 'icon';
  addAccountIconObj.src = 'images/add.svg';
  
  let addAccountNameObj = document.createElement('h5');
  addAccountNameObj.innerHTML = 'Add Account or Group';

  let addAccountObj = document.createElement('div');
  addAccountObj.className = 'account';
  addAccountObj.appendChild(addAccountIconObj);
  addAccountObj.appendChild(addAccountNameObj);
  
  return addAccountObj;
}


// ----- TASK LIST ----- //

let taskContainerObj = document.getElementById('task-container');

function setTasks(tasks) {
  // Reset tasks
  taskContainerObj.innerHTML = '';
  
  if (tasks.length === 0) {
    let noTasksObj = document.createElement('div');
    noTasksObj.id = 'no-tasks';
    noTasksObj.innerHTML = 'You have no outstanding tasks.';
    taskContainerObj.appendChild(noTasksObj);
  } else {
    for (let i = 0; i < tasks.length; i++) {
      taskContainerObj.appendChild(createTaskObj(tasks[i], i));
    }
  }
}


// ----- TASK ----- //

function createTaskObj(task, num) {
  let numObj = document.createElement('h4');
  numObj.className = 'task-num';
  numObj.innerHTML = `TASK ${num + 1}`;

  let nameObj = document.createElement('h3');
  nameObj.className = 'task-name';
  nameObj.innerHTML = task.name;

  let detailsObj = document.createElement('p');
  detailsObj.className = 'task-details';
  detailsObj.innerHTML = task.details === '' ? '<br>' : task.details;

  let dueObj = document.createElement('p');
  dueObj.className = 'task-due';
  dueObj.innerHTML = task.due;

  let taskObj = document.createElement('div');
  taskObj.className = 'task';
  
  switch (task.tag) {
    case 'complete':
      taskObj.classList.add('tag-complete');
      break;
    case 'attention':
      taskObj.classList.add('tag-attention');
      break;
    case 'alert':
      taskObj.classList.add('tag-alert');
      break;
    case 'links':
      taskObj.classList.add('tag-links');
      break;
    case 'locked':
      taskObj.classList.add('tag-locked');
      break;
    case 'company':
      taskObj.classList.add('tag-company');
      break;
  }

  taskObj.appendChild(numObj);
  taskObj.appendChild(nameObj);
  taskObj.appendChild(detailsObj);
  taskObj.appendChild(dueObj);
  
  return taskObj;
}


// ----- ACCOUNT DETAILS ----- //

let leftObj = document.getElementById('left');

let accountNameObjs = document.getElementsByClassName('account-name');

let tableObj = document.getElementById('table');

let amountInObj = document.getElementById('amount-in');
let amountOutObj = document.getElementById('amount-out');

function setAccount() {
  // Account details
  accountNameObjs[0].innerHTML = accounts[curr].name;
  // Account tasks
  accountNameObjs[1].innerHTML = accounts[curr].name;
  
  let available = 0;
  let ledger = 0;
  let transactions = [];
  
  if (isPosted) {
    available = accounts[curr].postedAvailable;
    ledger = accounts[curr].postedLedger;
    transactions = accounts[curr].postedTransactions;
  } else {
    available = accounts[curr].pendingAvailable;
    ledger = accounts[curr].pendingLedger;
    transactions = accounts[curr].pendingTransactions;
  }
  
  setBalanceContainer(available, ledger);
  
  // Reset table
  tableObj.innerHTML = '';
  tableObj.appendChild(createTableHeader());
  
  let noTransactionObj = document.getElementById('no-transaction');
  if (noTransactionObj !== null) {
    leftObj.removeChild(noTransactionObj);
  }
  
  // Amount in and out
  let amountIn = 0;
  let amountOut = 0;
  
  if (transactions.length === 0) {
    noTransactionObj = document.createElement('p');
    noTransactionObj.id = 'no-transaction';
    noTransactionObj.innerHTML = 'The data is not currently available.';
    leftObj.appendChild(noTransactionObj);
  } else {
    transactions.forEach((transaction) => {
      tableObj.appendChild(createTrObj(transaction));
      
      if (transaction.amount > 0) {
        amountIn += transaction.amount;
      } else {
        amountOut += transaction.amount;
      }
    });
  }
  
  amountInObj.innerHTML = formatAmount(amountIn);
  amountOutObj.innerHTML = formatAmount(Math.abs(amountOut));
  
  let tasks = accounts[curr].tasks;
  setTasks(tasks);
}


// ----- AVAILABLE & LEDGER BALANCES ----- //

let amountAvailableObj = document.getElementById('amount-available');
let amountLedgerObj = document.getElementById('amount-ledger');

function setBalanceContainer(available, ledger) {
  setAvailableBalance(available);
  setLedgerBalance(ledger);
}

function setAvailableBalance(available) {
  if (available === null) {
    amountAvailableObj.innerHTML = '---';
  } else {
    if (available < 0) {
      amountAvailableObj.classList.add('negative');
    } else {
      amountAvailableObj.classList.remove('negative');
    }
    amountAvailableObj.innerHTML = formatAmount(available);
  }
}

function setLedgerBalance(ledger) {
  if (ledger === null) {
    amountLedgerObj.innerHTML = '---';
  } else {
    if (ledger < 0) {
      amountLedgerObj.classList.add('negative');
    } else {
      amountLedgerObj.classList.remove('negative');
    }
    amountLedgerObj.innerHTML = formatAmount(ledger);
  }
}


// ----- TABLE HEADER ----- //

function createTableHeader() {
  // ICON
  let thIconObj = document.createElement('th');
  
  // ACCOUNT
  let thAccountObj = document.createElement('th');
  thAccountObj.innerHTML = 'ACCOUNT';
  
  // STATUS
  let thStatusObj = document.createElement('th');
  thStatusObj.innerHTML = 'STATUS';
  
  // TYPE
  let thTypeObj = document.createElement('th');
  thTypeObj.innerHTML = 'TYPE';
  
  // AMOUNT
  let thAmountObj = document.createElement('th');
  thAmountObj.innerHTML = 'AMOUNT';
  
  // DATE
  let thDateObj = document.createElement('th');
  thDateObj.innerHTML = 'DATE';
  
  // VIEW
  let thViewObj = document.createElement('th');
  
  let trObj = document.createElement('tr');
  trObj.appendChild(thIconObj);
  trObj.appendChild(thAccountObj);
  trObj.appendChild(thStatusObj);
  trObj.appendChild(thTypeObj);
  trObj.appendChild(thAmountObj);
  trObj.appendChild(thDateObj);
  trObj.appendChild(thViewObj);
  
  return trObj;
}


// ----- TABLE ROW ----- //

function createTrObj(transaction) {
  // ICON
  let tdIconImgObj = document.createElement('img');
  tdIconImgObj.className = 'td-icon';
  tdIconImgObj.src = transaction.amount < 0 ? 'images/out.svg' : 'images/in.svg';
  let tdIconObj = document.createElement('td');
  tdIconObj.appendChild(tdIconImgObj);
  
  // ACCOUNT
  let tdAccountAObj = document.createElement('a');
  tdAccountAObj.innerHTML = transaction.account;
  let tdAccountObj = document.createElement('td');
  tdAccountObj.appendChild(tdAccountAObj);

  // STATUS
  let tdStatusObj = document.createElement('td');
  tdStatusObj.innerHTML = transaction.status;
  
  // TYPE
  let tdTypeObj = document.createElement('td');
  tdTypeObj.innerHTML = transaction.type;
  
  // AMOUNT
  let tdAmountObj = document.createElement('td');
  tdAmountObj.innerHTML = formatAmount(transaction.amount);
  
  // DATE
  let tdDateObj = document.createElement('td');
  tdDateObj.innerHTML = transaction.date;
  
  // VIEW
  let tdViewAObj = document.createElement('a');
  tdViewAObj.className = 'td-view';
  tdViewAObj.innerHTML = 'VIEW';
  let tdViewObj = document.createElement('td');
  tdViewObj.appendChild(tdViewAObj);
  
  let trObj = document.createElement('tr');
  trObj.appendChild(tdIconObj);
  trObj.appendChild(tdAccountObj);
  trObj.appendChild(tdStatusObj);
  trObj.appendChild(tdTypeObj);
  trObj.appendChild(tdAmountObj);
  trObj.appendChild(tdDateObj);
  trObj.appendChild(tdViewObj);
  
  return trObj;
}


setAccounts();