let currentBalance = 142195.89;
let scheduledTransfer = 15350.00;

let currentBalanceObj = document.getElementById('current-balance');
currentBalanceObj.innerHTML = `$${currentBalance.toLocaleString(undefined, {minimumFractionDigits: 2})}`;

let scheduledTransferObj = document.getElementById('scheduled-transfer');
scheduledTransferObj.innerHTML = `$${scheduledTransfer.toLocaleString(undefined, {minimumFractionDigits: 2})}`;

let tasks = [
  {
    'name': 'Make a payment to John',
    'details': 'XYZ Company ∙ $5,000',
    'due': '07/01/2019'
  },
  {
    'name': 'ACH Transfer to XYZ',
    'details': 'ABC Company ∙ $10,000',
    'due': '07/02/2019'
  },
  {
    'name': 'Approve payments',
    'details': '',
    'due': ''
  }
];

let taskContainerObj = document.getElementById('task-container');

for (let i = 0; i < tasks.length; i++) {
  let task = tasks[i];
  
  let numObj = document.createElement('h4');
  numObj.className = 'task__num';
  numObj.innerHTML = `TASK ${i + 1}`;
  
  let nameObj = document.createElement('h3');
  nameObj.className = 'task__name';
  nameObj.innerHTML = task.name;
  
  let detailsObj = document.createElement('p');
  detailsObj.className = 'task__details';
  detailsObj.innerHTML = task.details;
  
  let dueObj = document.createElement('p');
  dueObj.className = 'task__due';
  dueObj.innerHTML = task.due;
  
  let cardObj = document.createElement('div');
  cardObj.className = 'task';
  
  cardObj.appendChild(numObj);
  cardObj.appendChild(nameObj);
  cardObj.appendChild(detailsObj);
  cardObj.appendChild(dueObj);
  
  taskContainerObj.appendChild(cardObj);
}