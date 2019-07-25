let h1Obj = document.getElementsByTagName('h1')[0];
h1Obj.innerHTML = `Hi ${firstName}.`;

// ----- ALL ACCOUNTS DATA ----- //

let tasksAll = [];
let suggestedTasksAll = [];
let postedAvailableAll = 0;
let postedLedgerAll = 0;
let postedTransactionsAll = [];
let pendingAvailableAll = 0;
let pendingLedgerAll = 0;
let pendingTransactionsAll = [];

accounts.forEach((account) => {
  tasksAll = tasksAll.concat(account.tasks);
  suggestedTasksAll = suggestedTasksAll.concat(account.suggestedTasks);
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
accountAll.suggestedTasks = suggestedTasksAll;
accountAll.postedAvailable = postedAvailableAll;
accountAll.postedLedger = postedLedgerAll;
accountAll.postedTransactions = postedTransactionsAll;
accountAll.pendingAvailable = pendingAvailableAll;
accountAll.pendingLedger = pendingLedgerAll;
accountAll.pendingTransactions = pendingTransactionsAll;

accounts.unshift(accountAll);

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
  // Reset account list
  accountContainerObj.innerHTML = '';
  
  // Add account boxes
  for (let i = 0; i < accounts.length; i++) {
    let accountObj = createAccountObj(accounts[i], i === 0);
    accountContainerObj.appendChild(accountObj);
  }
  
  let accountObjs = document.getElementsByClassName('account');
  
  // Add border to current account box
  accountObjs[curr].classList.add('account-selected');
  if (curr === 0) {
    accountObjs[curr].classList.add('account-all-selected');
  }
  
  // Add event listeners
  for (let i = 0; i < accountObjs.length; i++) {
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
  
  // Add Add Account or Group box
  accountContainerObj.appendChild(createAddAccountObj());
  
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
  addAccountIconObj.id = 'account-add-icon';
  addAccountIconObj.className = 'icon';
  addAccountIconObj.src = 'images/add.svg';
  
  let addAccountNameObj = document.createElement('h5');
  addAccountNameObj.innerHTML = 'Add Account or Group';

  let addAccountObj = document.createElement('div');
  addAccountObj.id = 'account-add';
  addAccountObj.className = 'account';
  addAccountObj.appendChild(addAccountIconObj);
  addAccountObj.appendChild(addAccountNameObj);
  
  return addAccountObj;
}

// ----- ACCOUNT OVERVIEW ----- //

let leftObj = document.getElementById('left');

let accountNameObjs = document.getElementsByClassName('account-name');
let amountInObj = document.getElementById('amount-in');
let amountOutObj = document.getElementById('amount-out');

let tableObj = document.getElementById('table');

function setAccount() {
  // Account name for transactions
  accountNameObjs[0].innerHTML = accounts[curr].name;
  // Account name for tasks
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
    transactions.forEach(transaction => {
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
  tdAccountAObj.className = 'td-account';
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

// ----- TASK LIST ----- //

let taskContainerObj = document.getElementById('task-container');

function setTasks(tasks) {
  // Reset task list
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
  if (curr === 0) {
    numObj.innerHTML = `TASK ${num + 1}<span class="task-account"> - ${task.account}</span>`;
  } else {
    numObj.innerHTML = `TASK ${num + 1}`;
  }

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
  
  let repeatObj = document.createElement('img');
  repeatObj.className = 'repeat';
  repeatObj.src = 'images/repeat.svg';

  taskObj.appendChild(numObj);
  taskObj.appendChild(nameObj);
  taskObj.appendChild(detailsObj);
  taskObj.appendChild(dueObj);
  if (task.recurring) {
    taskObj.appendChild(repeatObj);
  }
  
  return taskObj;
}

setAccounts();

// ----- TASK MANAGER ----- //

let manageTasksObj = document.getElementById('manage-tasks');
manageTasksObj.addEventListener('click', function() {
  openTaskManagerModal();
});

let modalOverlayObj = document.getElementsByClassName('modal-overlay')[0];
let taskManagerModalObj = document.getElementsByClassName('modal')[0];

function openTaskManagerModal() {
  modalOverlayObj.classList.remove('invisible');
  taskManagerModalObj.classList.remove('invisible-slide-down');
  loadTasks(accounts[curr]);
}

function closeTaskManagerModal() {
  taskManagerModalObj.classList.add('invisible-slide-down');
  modalOverlayObj.classList.add('invisible');
  saveTasks();
}

let taskManagerModalCloseIconObj = document.getElementsByClassName('modal-close-icon')[0];
taskManagerModalCloseIconObj.addEventListener('click', function() {
  closeTaskManagerModal();
});

let taskManagerHeaderObj = document.getElementById('task-manager-header');
let currentTasksObj = document.getElementById('current-tasks');
let suggestedTasksObj = document.getElementById('suggested-tasks');

function createNewTaskObj() {
  let iconObj = document.createElement('img');
  iconObj.id = 'task-add-icon';
  iconObj.className = 'icon';
  iconObj.src = 'images/add.svg';
  
  let dropdownButtonObj = document.createElement('button');
  dropdownButtonObj.id = 'dropdown-btn';
  dropdownButtonObj.innerHTML = 'CREATE NEW TASK';
  
  let typeObj = document.createElement('a');
  typeObj.innerHTML = 'TASK TYPE';
  
  let payObj = document.createElement('a');
  payObj.innerHTML = 'MAKE PAYMENT';
  
  let approveObj = document.createElement('a');
  approveObj.innerHTML = 'APPROVE PAYMENT';
  
  let assignObj = document.createElement('a');
  assignObj.innerHTML = 'ASSIGN TEAM';
    
  let dropdownContentObj = document.createElement('div');
  dropdownContentObj.id = 'dropdown-content';
  dropdownContentObj.className = 'hidden';
  dropdownContentObj.appendChild(typeObj);
  dropdownContentObj.appendChild(payObj);
  dropdownContentObj.appendChild(approveObj);
  dropdownContentObj.appendChild(assignObj);
  
  let dropdownObj = document.createElement('div');
  dropdownObj.id = 'dropdown';
  dropdownObj.appendChild(dropdownButtonObj);
  dropdownObj.appendChild(dropdownContentObj);

  let newTaskObj = document.createElement('div');
  newTaskObj.id = 'task-add';
  newTaskObj.className = 'task';
  newTaskObj.appendChild(iconObj);
  newTaskObj.appendChild(dropdownObj);
  
  newTaskObj.addEventListener('click', function() {
    dropdownContentObj.classList.toggle('hidden');
  });
  
  return newTaskObj;
}

function loadTasks(account) {
  taskManagerHeaderObj.innerHTML = `Task Manager - ${account.name}`;
  
  // Reset current tasks
  currentTasksObj.innerHTML = '';
    
  for (let i = 0; i < account.tasks.length; i++) {
    currentTasksObj.appendChild(createTaskObj(account.tasks[i], i));
  }
  
  currentTasksObj.appendChild(createNewTaskObj());
  
  // Reset suggested tasks
  suggestedTasksObj.innerHTML = '';
    
  for (let i = 0; i < account.suggestedTasks.length; i++) {
    suggestedTasksObj.appendChild(createTaskObj(account.suggestedTasks[i], i));
  }
}

function saveTasks() {
  
}

// ----- HELP CARD ----- //

let accountHelpCardObj = document.getElementById('account-help-card');
accountHelpCardObj.addEventListener('mouseover', function() {
  accountContainerObj.classList.add('outline');
});
accountHelpCardObj.addEventListener('mouseout', function() {
  accountContainerObj.classList.remove('outline');
});

let taskHelpCardObj = document.getElementById('task-help-card');
let rightObj = document.getElementById('right');
taskHelpCardObj.addEventListener('mouseover', function() {
  rightObj.classList.add('outline');
});
taskHelpCardObj.addEventListener('mouseout', function() {
  rightObj.classList.remove('outline');
});