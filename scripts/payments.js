// ----- PAYMENTS HUB TAB ----- //

let currHubTab = 0;

let paymentsHubTabObjs = document.getElementsByClassName('payments-hub-tab');
//for (let i = 0; i < paymentsHubTabObjs.length; i++) {
//  paymentsHubTabObjs[i].addEventListener('click', function() {
//    setPaymentsHubTab(i);
//  });
//}

function setPaymentsHubTab(i) {
  paymentsHubTabObjs[currHubTab].classList.remove('payments-hub-tab-selected');
  paymentsHubTabObjs[i].classList.add('payments-hub-tab-selected');
  createPaymentsTable(paymentsHubTabObjs[i].innerHTML);
  currHubTab = i;
}

// ----- PAYMENTS TABLE ----- //

let paymentsTableNameObj = document.getElementById('payments-table-name');
let paymentsTableObj = document.getElementById('payments-table');
let noPaymentObj = document.getElementById('no-payment');

function createPaymentsTableHeader() {
  // NAME
  let thNameObj = document.createElement('th');
  thNameObj.innerHTML = 'NAME';
  
  // DATE
  let thDateObj = document.createElement('th');
  thDateObj.innerHTML = 'DATE';

  // ACCOUNT
  let thAccountObj = document.createElement('th');
  thAccountObj.innerHTML = 'ACCOUNT';
  
  // TRACE ID
  let thTraceIdObj = document.createElement('th');
  thTraceIdObj.innerHTML = 'TRACE ID';
  
  // TYPE
  let thTypeObj = document.createElement('th');
  thTypeObj.innerHTML = 'TYPE';
  
  // STATUS
  let thStatusObj = document.createElement('th');
  thStatusObj.innerHTML = 'STATUS';
  
  // FREQUENCY
  let thFrequencyObj = document.createElement('th');
  thFrequencyObj.innerHTML = 'FREQUENCY';
  
  // AMOUNT
  let thAmountObj = document.createElement('th');
  thAmountObj.innerHTML = 'AMOUNT';
  
  // ACTIONS
  let thActionsObj = document.createElement('th');
  thActionsObj.innerHTML = 'ACTIONS';
  
  let trObj = document.createElement('tr');
  trObj.appendChild(thNameObj);
  trObj.appendChild(thDateObj);
  trObj.appendChild(thAccountObj);
  trObj.appendChild(thTraceIdObj);
  trObj.appendChild(thTypeObj);
  trObj.appendChild(thStatusObj);
  trObj.appendChild(thFrequencyObj);
  trObj.appendChild(thAmountObj);
  trObj.appendChild(thActionsObj);
  
  return trObj;
}

function createPaymentsTable(paymentsTableName) {
  paymentsTableNameObj.innerHTML = `${paymentsTableName} (0)`;
  
  // Reset table
  paymentsTableObj.innerHTML = '';
  paymentsTableObj.appendChild(createPaymentsTableHeader());
  
  noPaymentObj.innerHTML = `You currently have no ${paymentsTableName.toLowerCase()} payments.`;
}

setPaymentsHubTab(currHubTab);

// ----- MAKE A PAYMENT ----- //

let paymentObj = document.getElementById('payment');
paymentObj.addEventListener('click', function() {
  openPaymentModal();
});

// ----- PAYMENT MODAL ----- //

let modalOverlayObj = document.getElementsByClassName('modal-overlay')[0];
let paymentModalObj = document.getElementsByClassName('modal')[0];

function openPaymentModal() {
  modalOverlayObj.classList.remove('invisible');
  paymentModalObj.classList.remove('invisible-slide-down');
  console.log('hi');
  showHelpCards();
}

function closePaymentModal() {
  paymentModalObj.classList.add('invisible-slide-down');
  modalOverlayObj.classList.add('invisible');
  resetPaymentInfo();
  hideHelpCards();
}

let paymentModalCloseIconObj = document.getElementsByClassName('modal-close-icon')[0];
paymentModalCloseIconObj.addEventListener('click', function() {
  closePaymentModal();
});

let paymentModalBodyObj = document.getElementsByClassName('modal-body')[0];

let payeeInput = document.getElementById('payee-input');
let typeInput = document.getElementById('type-input');
let accountInput =document.getElementById('account-input');
let amountInput = document.getElementsByClassName('amount-input')[0];
let dateInput = document.getElementById('date-input');
let memoInput = document.getElementById('memo-input');
let noteToSelfInput = document.getElementById('note-to-self-input');

let name;
let date;
let account;
let type;
let amount;

function getPaymentInfo() {
  name = payeeInput.options[payeeInput.selectedIndex].text;
  date = formatDate(dateInput.value);
  account = accountInput.options[accountInput.selectedIndex].text;
  type = typeInput.options[typeInput.selectedIndex].text;
  amount = formatAmount(Number(amountInput.value.replace('$', '')));
}

function resetPaymentInfo() {
  name = '';
  date = '';
  account = '';
  type = '';
  amount = '';
  
  amountInput.value = '';
  dateInput.value = '';
  memoInput.value = '';
  noteToSelfInput.value = '';
  
  payeeInput.value = 'Splendid Energy';
  typeInput.value = 'Bill Pay';
  accountInput.value = 'Residential x8901';
  
  submitObj.classList.add('primary-button-disabled');
}

amountInput.addEventListener('input', function() {
  if (isValidAmount(amountInput.value)) {
    submitObj.classList.remove('primary-button-disabled');
  } else {
    submitObj.classList.add('primary-button-disabled');
  }
});

dateInput.addEventListener('input', function() {
  if (isValidDate(dateInput.value)) {
    submitObj.classList.remove('primary-button-disabled');
  } else {
    submitObj.classList.add('primary-button-disabled');
  }
})

let submitObj = document.getElementById('submit');

submitObj.addEventListener('click', function() {
  if (!submitObj.classList.contains('primary-button-disabled')) {
    submit();
  }
});

function submit() {
  getPaymentInfo();
  paymentModalObj.classList.add('invisible-slide-down');
  setTimeout(openConfirmationModal, 200);
  hideHelpCards();
  
  // Close help
  if (!helpAppObj.classList.contains('invisible-slide-down')) {
    toggleHelp();
  }
}

// ----- CONFIRMATION MODAL ----- //

let confirmationModalObj = document.getElementsByClassName('modal')[1];
let confirmationAmountObj = document.getElementById('confirmation-amount');

function openConfirmationModal() {
  confirmationModalObj.classList.remove('invisible-slide-down');
  confirmationAmountObj.innerHTML = amount;
  setConfirmationTable();
}

function closeConfirmationModal() {
  confirmationModalObj.classList.add('invisible-slide-down');
  modalOverlayObj.classList.add('invisible');
  resetPaymentInfo();
}

let confirmationModalCloseIconObj = document.getElementsByClassName('modal-close-icon')[1];
confirmationModalCloseIconObj.addEventListener('click', function() {
  closeConfirmationModal();
});

function createConfirmationTableHeader() {
  // NAME
  let thNameObj = document.createElement('th');
  thNameObj.innerHTML = 'NAME';
  
  // DATE
  let thDateObj = document.createElement('th');
  thDateObj.innerHTML = 'DATE';

  // ACCOUNT
  let thAccountObj = document.createElement('th');
  thAccountObj.innerHTML = 'ACCOUNT';
  
  // TYPE
  let thTypeObj = document.createElement('th');
  thTypeObj.innerHTML = 'TYPE';
  
  // AMOUNT
  let thAmountObj = document.createElement('th');
  thAmountObj.innerHTML = 'AMOUNT';
  
  let trObj = document.createElement('tr');
  trObj.appendChild(thNameObj);
  trObj.appendChild(thDateObj);
  trObj.appendChild(thAccountObj);
  trObj.appendChild(thTypeObj);
  trObj.appendChild(thAmountObj);
  
  return trObj;
}

let confirmationTableObj = document.getElementById('confirmation-table');

function setConfirmationTable() {
  // Reset table
  confirmationTableObj.innerHTML = '';
  confirmationTableObj.appendChild(createConfirmationTableHeader());
  
  // NAME
  let tdNameObj = document.createElement('td');
  tdNameObj.innerHTML = name;
  
  // DATE
  let tdDateObj = document.createElement('td');
  tdDateObj.innerHTML = date;

  // ACCOUNT
  let tdAccountObj = document.createElement('td');
  tdAccountObj.innerHTML = account;
  
  // TYPE
  let tdTypeObj = document.createElement('td');
  tdTypeObj.innerHTML = type;
  
  // AMOUNT
  let tdAmountObj = document.createElement('td');
  tdAmountObj.innerHTML = amount;
  
  let trObj = document.createElement('tr');
  trObj.appendChild(tdNameObj);
  trObj.appendChild(tdDateObj);
  trObj.appendChild(tdAccountObj);
  trObj.appendChild(tdTypeObj);
  trObj.appendChild(tdAmountObj);
  
  confirmationTableObj.appendChild(trObj);
}

// ----- HELP CARD ----- //

let payeeHelpCardObj = document.getElementById('payee-help-card');
let payeeObj = document.getElementById('payee');
payeeHelpCardObj.addEventListener('mouseover', function() {
  payeeObj.classList.add('outline');
});
payeeHelpCardObj.addEventListener('mouseout', function() {
  payeeObj.classList.remove('outline');
});

let amountHelpCardObj = document.getElementById('amount-help-card');
let amountObj = document.getElementById('amount');
amountHelpCardObj.addEventListener('mouseover', function() {
  amountObj.classList.add('outline');
});
amountHelpCardObj.addEventListener('mouseout', function() {
  amountObj.classList.remove('outline');
});

let dateHelpCardObj = document.getElementById('date-help-card');
let dateObj = document.getElementById('date');
dateHelpCardObj.addEventListener('mouseover', function() {
  dateObj.classList.add('outline');
});
dateHelpCardObj.addEventListener('mouseout', function() {
  dateObj.classList.remove('outline');
});

function showHelpCards() {
  payeeHelpCardObj.classList.remove('invisible');
  amountHelpCardObj.classList.remove('invisible');
  dateHelpCardObj.classList.remove('invisible');
}

function hideHelpCards() {
  payeeHelpCardObj.classList.add('invisible');
  amountHelpCardObj.classList.add('invisible');
  dateHelpCardObj.classList.add('invisible');
}