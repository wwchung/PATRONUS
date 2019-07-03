let firstName = 'Sam';
let lastName = 'Caprice';

let fullNameObj = document.getElementById('full-name');
fullNameObj.innerHTML = `${firstName} ${lastName}`;

let amountIn = 10000;
let amountOut = 50000;

let amountInObj = document.getElementById('amount-in');
amountInObj.innerHTML = `$${amountIn.toLocaleString(undefined, {minimumFractionDigits: 2})}`;

let amountOutObj = document.getElementById('amount-out');
amountOutObj.innerHTML = `$${amountOut.toLocaleString(undefined, {minimumFractionDigits: 2})}`;

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
  
  let taskObj = document.createElement('div');
  taskObj.className = 'task';
  
  taskObj.appendChild(numObj);
  taskObj.appendChild(nameObj);
  taskObj.appendChild(detailsObj);
  taskObj.appendChild(dueObj);
  
  taskContainerObj.appendChild(taskObj);
}