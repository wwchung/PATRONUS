// ----- PAYMENT MODAL ----- //

let paymentModalObj = document.getElementById('payment-modal');
let paymentModalContentObj = document.getElementById('payment-modal-content');

function openPaymentModal() {
  paymentModalObj.classList.add('modal-visible');
  paymentModalContentObj.classList.add('modal-content-visible');
}

function closePaymentModal() {
  paymentModalObj.classList.remove('modal-visible');
  paymentModalContentObj.classList.remove('modal-content-visible');
  
  setTimeout(resetPaymentModal, 200);
}

function resetPaymentModal() {
  paymentModalBodyObj.classList.remove('hidden');
  confirmationModalBodyObj.classList.add('hidden');
  
  resetPaymentInfo();
}

// ----- MAKE A PAYMENT ----- //

let paymentObj = document.getElementById('payment');
paymentObj.addEventListener('click', function() {
  openPaymentModal();
});

// ----- MODAL CLOSE ICON ----- //

let modalCloseIconObj = document.getElementById('modal-close-icon');
modalCloseIconObj.addEventListener('click', function() {
  closePaymentModal();
});

// ----- PAYMENT MODAL BODY ----- //

let paymentModalBodyObj = document.getElementById('payment-modal-body');

let payeeInput = document.getElementById('payee-input');
let typeInput = document.getElementById('type-input');
let accountInput =document.getElementById('account-input');
let amountInput = document.getElementById('amount-input');
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
  date = dateInput.value;
  account = accountInput.options[accountInput.selectedIndex].text;
  type = typeInput.options[typeInput.selectedIndex].text;
  amount = amountInput.value;
}

function resetPaymentInfo() {
  name = '';
  date = '';
  account = '';
  type = '';
  amount = '';
  
  amountInput.value = '$0.00';
  dateInput.value = '7/14/2019';
  memoInput.value = '';
  noteToSelfInput.value = '';
}

function showConfirmation() {
  paymentModalBodyObj.classList.add('hidden');
  confirmationModalBodyObj.classList.remove('hidden');
  confirmationAmountObj.innerHTML = amount;
  setTable();
}

let submitObj = document.getElementById('submit');

submitObj.addEventListener('click', function() {
  getPaymentInfo();
  showConfirmation();
});

// ----- CONFIRMATION MODAL BODY ----- //

let confirmationModalBodyObj = document.getElementById('confirmation-modal-body');
let confirmationAmountObj = document.getElementById('confirmation-amount');

function createTableHeader() {
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

let tableObj = document.getElementById('confirmation-table');

function setTable() {
  // Reset table
  tableObj.innerHTML = '';
  tableObj.appendChild(createTableHeader());
  
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
  
  tableObj.appendChild(trObj);
}