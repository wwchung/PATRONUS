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
      taskContainerObj.appendChild(createTaskObj(tasks[i], i, true));
    }
  }
}

// ----- TASK ----- //

function createTaskObj(task, num, clickable) {
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
  if (task.amount === 0) {
    detailsObj.innerHTML = task.payee === '' ? '<br>' : `${task.payee}`;
  } else {
    detailsObj.innerHTML = task.payee === '' ? '<br>' : `${task.payee} ∙ ${formatAmount(task.amount)}`;
  }

  let dueObj = document.createElement('p');
  dueObj.className = 'task-due';
  dueObj.innerHTML = task.date;

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
  if (clickable) {
    taskObj.addEventListener('click', function() {
      openTaskHub(num);
    });
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
  hideHelpCards();
  modalOverlayObj.classList.remove('invisible');
  taskManagerModalObj.classList.remove('invisible-slide-down');
  loadTasks(accounts[curr]);
}

function closeTaskManagerModal() {
  taskManagerModalObj.classList.add('invisible-slide-down');
  modalOverlayObj.classList.add('invisible');
  showHelpCards();
  closeNewTask();
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
  payObj.addEventListener('click', openNewTask);
  
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
    currentTasksObj.appendChild(createTaskObj(account.tasks[i], i, false));
  }
  
  currentTasksObj.appendChild(createNewTaskObj());
  
  // Reset suggested tasks
  suggestedTasksObj.innerHTML = '';
  
  if (account.suggestedTasks.length === 0) {
    let noSuggestedTaskObj = document.createElement('p');
    noSuggestedTaskObj.id = 'no-suggested-task';
    noSuggestedTaskObj.innerHTML = 'You have no suggested tasks.';
    suggestedTasksObj.appendChild(noSuggestedTaskObj);
  }
    
  for (let i = 0; i < account.suggestedTasks.length; i++) {
    suggestedTasksObj.appendChild(createTaskObj(account.suggestedTasks[i], i, false));
  }
}

// ----- NEW TASK ----- //

let newTaskObj = document.getElementsByClassName('new-task')[0];

function openNewTask() {
  let taskAddObj = document.getElementById('task-add');
  taskAddObj.classList.add('task-add-selected');
  newTaskObj.classList.remove('new-task-hidden');
}

let cancelObj = document.getElementById('cancel');
cancelObj.addEventListener('click', closeNewTask);

function closeNewTask() {
  let taskAddObj = document.getElementById('task-add');
  taskAddObj.classList.remove('task-add-selected');
  newTaskObj.classList.add('new-task-hidden');
  
  recurringObj.classList.remove('recurring-selected');
  recurringIconObj.classList.remove('recurring-icon-selected');
  recurringDetailsObj.classList.add('hidden');
  
  nameInput.value = '';
  amountInput.value = '';
  dateInput.value = '';
  memoInput.value = '';
  noteToSelfInput.value = '';
  
  payeeInput.value = 'Splendid Energy';
  typeInput.value = 'Bill Pay';
  accountInput.value = 'Residential x8901';
  
  saveObj.classList.add('primary-button-disabled');
}

let recurringObj = document.getElementsByClassName('recurring')[0];
let recurringIconObj = document.getElementsByClassName('recurring-icon')[0];
let recurringDetailsObj = document.getElementById('recurring-details');
recurringObj.addEventListener('click', toggleRecurring);

function toggleRecurring() {
  recurringObj.classList.toggle('recurring-selected');
  recurringIconObj.classList.toggle('recurring-icon-selected');
  recurringDetailsObj.classList.toggle('hidden');
}

let nameInput = document.getElementById('name-input');
let payeeInput = document.getElementsByClassName('payee-input')[0];
let typeInput = document.getElementsByClassName('type-input')[0];
let accountInput =document.getElementsByClassName('account-input')[0];
let amountInput = document.getElementsByClassName('amount-input')[0];
let dateInput = document.getElementsByClassName('date-input')[0];
let memoInput = document.getElementsByClassName('memo-input')[0];
let noteToSelfInput = document.getElementsByClassName('note-to-self-input')[0];

nameInput.addEventListener('input', function() {
  if (isValidInput()) {
    saveObj.classList.remove('primary-button-disabled');
  } else {
    saveObj.classList.add('primary-button-disabled');
  }
});

amountInput.addEventListener('input', function() {
  if (isValidInput()) {
    saveObj.classList.remove('primary-button-disabled');
  } else {
    saveObj.classList.add('primary-button-disabled');
  }
});

dateInput.addEventListener('input', function() {
  if (isValidInput()) {
    saveObj.classList.remove('primary-button-disabled');
  } else {
    saveObj.classList.add('primary-button-disabled');
  }
})

function isValidInput() {
  return hasTaskName() && (isValidAmount(amountInput.value) || amountInput.value === '') && isValidDate(dateInput.value);
}

function hasTaskName() {
  return nameInput.value !== '';
}

function saveTask() {
  let account = accountInput.value;
  let name = nameInput.value;
  let payee = payeeInput.value;
  let type = typeInput.value;
  let amount = Number(amountInput.value.replace('$', ''));
  let date = formatDate(dateInput.value);
  let memo = memoInput.value;
  let noteToSelf = noteToSelfInput.value;
  let recurring = recurringObj.classList.contains('recurring-selected');
  
  let task = {
    'account': account,
    'name': name,
    'payee': payee,
    'type': type,
    'amount': amount,
    'date': date,
    'memo': memo,
    'noteToSelf': noteToSelf,
    'recurring': recurring
  };
  
  closeNewTask();
  
  accounts[0].tasks.push(task);
  
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].name === account) {
      accounts[i].tasks.push(task);
    }
  }
  loadTasks(accounts[curr]);
  
  let tasks = accounts[curr].tasks;
  setTasks(tasks);
}

let saveObj = document.getElementById('save');
saveObj.addEventListener('click', function() {
  if (!saveObj.classList.contains('primary-button-disabled')) {
    saveTask();
  }
});

// ----- TASK HUB ----- //

let taskHubObj = document.getElementById('task-hub');
let taskTabsObj = document.getElementById('task-tabs');

function openTaskHub(selected) {
  setTaskTabs(selected);
  setTaskModal(selected);
  hideHelpCards();
  taskHubObj.classList.toggle('invisible');
}

function closeTaskHub(selected) {
  taskHubObj.classList.toggle('invisible');
  showHelpCards();
}

let taskPayeeInput = document.getElementsByClassName('payee-input')[1];
let taskTypeInput = document.getElementsByClassName('type-input')[1];
let taskAccountInput =document.getElementsByClassName('account-input')[1];
let taskAmountInput = document.getElementsByClassName('amount-input')[1];
let taskDateInput = document.getElementsByClassName('date-input')[1];
let taskMemoInput = document.getElementsByClassName('memo-input')[1];
let taskNoteToSelfInput = document.getElementsByClassName('note-to-self-input')[1];

function setTaskModal(selected) {
  let task = accounts[curr].tasks[selected];
  
  let taskTabObjs = document.getElementsByClassName('task-tab');
  for (let i = 0; i < taskTabObjs.length; i++) {
    taskTabObjs[i].classList.remove('task-tab-selected');
  }
  taskTabObjs[selected].classList.add('task-tab-selected');
  
  taskPayeeInput.value = task.payee;
  taskTypeInput.value = task.type;
  taskAccountInput.value = task.account;
  taskAmountInput.value = task.amount === 0 ? '' : formatAmount(task.amount);
  taskDateInput.value = task.date;
  taskMemoInput.value = task.memo;
  taskNoteToSelfInput.value = task.noteToSelf;
}

let taskHubModalCloseIconObj = document.getElementsByClassName('modal-close-icon')[1];
taskHubModalCloseIconObj.addEventListener('click', closeTaskHub);

function setTaskTabs(selected) {  
  // Reset tasks tabs
  taskTabsObj.innerHTML = '';
    
  for (let i = 0; i < accounts[curr].tasks.length; i++) {
    taskTabsObj.appendChild(createTaskTabObj(accounts[curr].tasks[i], i, i === selected));
  }
}

function createTaskTabObj(task, num, selected) {
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
  detailsObj.innerHTML = task.payee === '' ? '<br>' : `${task.payee} ∙ ${formatAmount(task.amount)}`;

  let dueObj = document.createElement('p');
  dueObj.className = 'task-due';
  dueObj.innerHTML = task.date;

  let taskObj = document.createElement('div');
  taskObj.className = 'task-tab';
  if (selected) {
    taskObj.classList.add('task-tab-selected');
  }
  taskObj.addEventListener('click', function() {
    setTaskModal(num);
  });
  
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

function showHelpCards() {
  accountHelpCardObj.classList.remove('invisible');
  taskHelpCardObj.classList.remove('invisible');
}

function hideHelpCards() {
  accountHelpCardObj.classList.add('invisible');
  taskHelpCardObj.classList.add('invisible');
}