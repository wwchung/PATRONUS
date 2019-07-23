let firstName = 'Sam';
let lastName = 'Caprice';

let fullNameObj = document.getElementById('full-name');
fullNameObj.innerHTML = `${firstName} ${lastName}`;

// ----- QUICK HELP ----- //

let helpObj = document.getElementById('help');
let helpIconObj = document.getElementById('help-icon')
let helpCloseIconObj = document.getElementById('help-close-icon');
let helpAppObj = document.getElementsByClassName('help-app')[0];
let helpAppDragObj = document.getElementById('help-app-drag');

function toggleHelp() {
  helpIconObj.classList.toggle('hidden');
  helpCloseIconObj.classList.toggle('hidden');
  helpAppObj.classList.toggle('help-app-visible');
  setTimeout(resetDragHelp, 200);
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

function startDragHelp(e) {
  let distX = posX - e.clientX;
  let distY = posY - e.clientY;
  posX = e.clientX;
  posY = e.clientY;
  helpAppObj.style.top = `${helpAppObj.offsetTop - distY}px`;
  helpAppObj.style.left = `${helpAppObj.offsetLeft - distX}px`;
  helpAppObj.style.transition = 'none';
}

function stopDragHelp(e) {
  document.onmouseup = null;
  document.onmousemove = null;
  helpAppObj.style.transition = '.2s';
}

function resetDragHelp() {
  helpAppObj.style.top = null;
  helpAppObj.style.left = null;
  helpAppObj.style.bottom = '6.25rem';
  helpAppObj.style.right = '1.25rem';
}

let posX;
let posY;

// Allow dragging
helpAppDragObj.addEventListener('mousedown', e => {
  posX = e.clientX;
  posY = e.clientY;
  document.onmouseup = stopDragHelp;
  document.onmousemove = startDragHelp;
});

// ----- SIDE NAV ----- //

let menuObj = document.getElementById('menu');
let menuIconObj = document.getElementById('menu-icon');
let menuCloseIconObj = document.getElementById('menu-close-icon');
let sideNavObj = document.getElementsByClassName('side-nav')[0];
let sideNavOverlayObj = document.getElementsByClassName('side-nav-overlay')[0];

function toggleMenu() {
  menuIconObj.classList.toggle('hidden');
  menuCloseIconObj.classList.toggle('hidden');
  sideNavObj.classList.toggle('side-nav-visible');
  sideNavOverlayObj.classList.toggle('side-nav-overlay-visible');
}

// Menu button
menuObj.addEventListener('click', function() {
  toggleMenu();
  
  // Close help
  if (helpAppObj.classList.contains('help-app-visible')) {
    toggleHelp();
  }
});

// Remove overlay
sideNavOverlayObj.addEventListener('click', function() {
  toggleMenu();
});

// ----- DATA ----- //

let accountsData = [
  {
    'name': 'Residential x8901',
    'tasks': [],
    'suggestedTasks': [],
    'postedAvailable': -493.54,
    'postedLedger': -493.54,
    'postedTransactions': [
      {
        'account': 'Residential x8901',
        'status': 'Posted',
        'type': 'Money Transfer DB - Other',
        'amount': -500.00,
        'date': '07/14/2019'
      },
      {
        'account': 'Residential x8901',
        'status': 'Posted',
        'type': 'Money Transfer CR - Other',
        'amount': 6.28,
        'date': '07/14/2019'
      },
      {
        'account': 'Residential x8901',
        'status': 'Posted',
        'type': 'Money Transfer CR - Other',
        'amount': 1.50,
        'date': '07/14/2019'
      },
      {
        'account': 'Residential x8901',
        'status': 'Posted',
        'type': 'Money Transfer DB - Other',
        'amount': -1.25,
        'date': '07/14/2019'
      },
      {
        'account': 'Residential x8901',
        'status': 'Posted',
        'type': 'Money Transfer CR - Other',
        'amount': 1.00,
        'date': '07/14/2019'
      },
      {
        'account': 'Residential x8901',
        'status': 'Posted',
        'type': 'Money Transfer DB - Other',
        'amount': -1.00,
        'date': '07/14/2019'
      },
      {
        'account': 'Residential x8901',
        'status': 'Posted',
        'type': 'Money Transfer DB - Other',
        'amount': -0.10,
        'date': '07/14/2019'
      },
      {
        'account': 'Residential x8901',
        'status': 'Posted',
        'type': 'Money Transfer CR - Other',
        'amount': 0.03,
        'date': '07/14/2019'
      },
      {
        'account': 'Residential x8901',
        'status': 'Posted',
        'type': 'Money Transfer CR - Other',
        'amount': 0.02,
        'date': '07/14/2019'
      },
      {
        'account': 'Residential x8901',
        'status': 'Posted',
        'type': 'Money Transfer DB - Other',
        'amount': -0.02,
        'date': '07/14/2019'
      }
    ],
    'pendingAvailable': 0.00,
    'pendingLedger': 0.00,
    'pendingTransactions': []
  },
  {
    'name': 'Payroll x0123',
    'tasks': [
      {
        'account': 'Payroll x0123',
        'name': 'ACH payment to ABC',
        'details': 'ABC Company ∙ $10,000 ∙ ACH',
        'due': '07/29/2019',
        'recurring': false
      },
      {
        'account': 'Payroll x0123',
        'name': 'Approve account transfers',
        'details': '3 Pending Transfers',
        'due': '07/29/2019 12:00 PM',
        'recurring': true
      },
      {
        'account': 'Payroll x0123',
        'name': 'Approve payments',
        'details': '4 Pending Payments',
        'due': '07/29/2019 12:00 PM',
        'recurring': true
      }
    ],
    'suggestedTasks': [
      {
        'account': 'Payroll x0123',
        'name': 'ACH payment to XYZ',
        'details': 'ABC Company ∙ $10,000',
        'due': '07/30/2019',
        'recurring': true
      },
      {
        'account': 'Payroll x0123',
        'name': 'ACH payment to John',
        'details': 'XYZ Company ∙ $1,250',
        'due': '07/30/2019',
        'recurring': true
      }
    ],
    'postedAvailable': 5714448.67,
    'postedLedger': 6235440.67,
    'postedTransactions': [
      
      {
        'account': 'Payroll x0123',
        'status': 'Posted',
        'type': 'Money Transfer CR - Wire',
        'amount': 6660995.00,
        'date': '07/14/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Posted',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/14/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Posted',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/14/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Posted',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/14/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Posted',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/14/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Posted',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/14/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Posted',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/14/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Posted',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/14/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Posted',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/14/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Posted',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/14/2019'
      }
    ],
    'pendingAvailable': 203193.00,
    'pendingLedger': 254764.00,
    'pendingTransactions': [
      {
        'account': 'Payroll x0123',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/15/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Pending',
        'type': 'Detail Deposits',
        'amount': 193598.92,
        'date': '07/15/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Pending',
        'type': 'ZBA Debits',
        'amount': -178652.27,
        'date': '07/15/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 27504.60,
        'date': '07/15/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 14435.00,
        'date': '07/15/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Pending',
        'type': 'Money Transfer CR - Wire',
        'amount': 10390.00,
        'date': '07/15/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Pending',
        'type': 'Miscellaneous Credits',
        'amount': 8460.00,
        'date': '07/15/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Pending',
        'type': 'Miscellaneous Credits',
        'amount': 1850.00,
        'date': '07/15/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Pending',
        'type': 'ACH Debits',
        'amount': -1705.35,
        'date': '07/15/2019'
      },
      {
        'account': 'Payroll x0123',
        'status': 'Pending',
        'type': 'ACH Credits',
        'amount': 100.00,
        'date': '07/15/2019'
      }
    ]
  },
  {
    'name': 'Commercial x9012',
    'tasks': [
      {
        'account': 'Commercial x9012',
        'name': 'Assign user X to team Y',
        'details': '',
        'due': '07/09/2019',
        'recurring': false
      }
    ],
    'suggestedTasks': [],
    'postedAvailable': 5723938.67,
    'postedLedger': 6234930.67,
    'postedTransactions': [
      {
        'account': 'Commercial x9012',
        'status': 'Posted',
        'type': 'Money Transfer CR - Wire',
        'amount': 6660995.00,
        'date': '07/14/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Posted',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/14/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Posted',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/14/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Posted',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/14/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Posted',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/14/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Posted',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/14/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Posted',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/14/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Posted',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/14/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Posted',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/14/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Posted',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/14/2019'
      }
    ],
    'pendingAvailable': 203193.00,
    'pendingLedger': 254764.00,
    'pendingTransactions': [
      {
        'account': 'Commercial x9012',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/15/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Pending',
        'type': 'Detail Deposits',
        'amount': 193598.92,
        'date': '07/15/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Pending',
        'type': 'ZBA Debits',
        'amount': -178652.27,
        'date': '07/15/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 27504.60,
        'date': '07/15/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 14435.00,
        'date': '07/15/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Pending',
        'type': 'Money Transfer CR - Wire',
        'amount': 10390.00,
        'date': '07/15/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Pending',
        'type': 'Miscellaneous Credits',
        'amount': 8460.00,
        'date': '07/15/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Pending',
        'type': 'Miscellaneous Credits',
        'amount': 1850.00,
        'date': '07/15/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Pending',
        'type': 'ACH Debits',
        'amount': -1705.35,
        'date': '07/15/2019'
      },
      {
        'account': 'Commercial x9012',
        'status': 'Pending',
        'type': 'ACH Credits',
        'amount': 100.00,
        'date': '07/15/2019'
      }
    ]
  },
  {
    'name': 'Utilities x7890',
    'tasks': [],
    'suggestedTasks': [],
    'postedAvailable': 498.79,
    'postedLedger': 498.79,
    'postedTransactions': [
      {
        'account': 'Utilities x7890',
        'status': 'Posted',
        'type': 'Money Transfer CR - Other',
        'amount': 500.00,
        'date': '07/14/2019'
      },
      {
        'account': 'Utilities x7890',
        'status': 'Posted',
        'type': 'Money Transfer CR - Other',
        'amount': 10.00,
        'date': '07/14/2019'
      },
      {
        'account': 'Utilities x7890',
        'status': 'Posted',
        'type': 'Money Transfer DB - Other',
        'amount': -6.28,
        'date': '07/14/2019'
      },
      {
        'account': 'Utilities x7890',
        'status': 'Posted',
        'type': 'Money Transfer DB - Other',
        'amount': -2.00,
        'date': '07/14/2019'
      },
      {
        'account': 'Utilities x7890',
        'status': 'Posted',
        'type': 'Money Transfer DB - Other',
        'amount': -1.50,
        'date': '07/14/2019'
      },
      {
        'account': 'Utilities x7890',
        'status': 'Posted',
        'type': 'Money Transfer DB - Other',
        'amount': -1.50,
        'date': '07/14/2019'
      },
      {
        'account': 'Utilities x7890',
        'status': 'Posted',
        'type': 'Money Transfer CR - Other',
        'amount': 1.00,
        'date': '07/14/2019'
      },
      {
        'account': 'Utilities x7890',
        'status': 'Posted',
        'type': 'Money Transfer DB - Other',
        'amount': -1.00,
        'date': '07/14/2019'
      },
      {
        'account': 'Utilities x7890',
        'status': 'Posted',
        'type': 'Money Transfer CR - Other',
        'amount': 0.10,
        'date': '07/14/2019'
      },
      {
        'account': 'Utilities x7890',
        'status': 'Posted',
        'type': 'Money Transfer DB - Other',
        'amount': -0.03,
        'date': '07/14/2019'
      }
    ],
    'pendingAvailable': null,
    'pendingLedger': null,
    'pendingTransactions': []
  },
  {
    'name': 'Checking x1234',
    'tasks': [],
    'suggestedTasks': [],
    'postedAvailable': 10.00,
    'postedLedger': 10.00,
    'postedTransactions': [
      {
        'account': 'Checking x1234',
        'status': 'Pending',
        'type': 'Money Transfer CR - Other',
        'amount': 10.00,
        'date': '07/14/2019'
      }
    ],
    'pendingAvailable': null,
    'pendingLedger': null,
    'pendingTransactions': []
  }
];

let accounts = JSON.parse(localStorage.getItem('accounts'));
if (accounts === null) {
  localStorage.setItem('accounts', JSON.stringify(accountsData));
  accounts = accountsData;
}