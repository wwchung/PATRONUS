let firstName = 'Sam';
let lastName = 'Caprice';

let fullNameObj = document.getElementById('full-name');
fullNameObj.innerHTML = `${firstName} ${lastName}`;

let h1Obj = document.getElementsByTagName('h1')[0];
h1Obj.innerHTML = `Hi ${firstName}.`;

let amountInObj = document.getElementById('amount-in');
let amountOutObj = document.getElementById('amount-out');

let accountContainerObj = document.getElementById('account-container');

let leftObj = document.getElementById('left');
let rightObj = document.getElementById('right');

let accountNameObjs = document.getElementsByClassName('account-name');
let amountAvailableObj = document.getElementById('amount-available');
let amountLedgerObj = document.getElementById('amount-ledger');

// Selected account index
let curr = 0;

// Posted or pending status
let isPosted = true;

let switchInputObj = document.getElementById('switch-input');
switchInputObj.addEventListener('change', function() {
  isPosted = !switchInputObj.checked;
  setAccounts();
});


// ----- ACCOUNTS ----- //

let accounts = [
  {
    'name': 'Statement Savings x8466',
    'tasks': [],
    'postedAvailable': 0.00,
    'postedLedger': 0.00,
    'pendingAvailable': -493.54,
    'pendingLedger': -493.54,
    'postedTransactions': [],
    'pendingTransactions': [
      {
        'account': 'Statement Savings x8466',
        'status': 'Pending',
        'type': 'Money Transfer DB - Other',
        'amount': -500.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Statement Savings x8466',
        'status': 'Pending',
        'type': 'Money Transfer CR - Other',
        'amount': 6.28,
        'date': '07/05/2019'
      },
      {
        'account': 'Statement Savings x8466',
        'status': 'Pending',
        'type': 'Money Transfer CR - Other',
        'amount': 1.50,
        'date': '07/05/2019'
      },
      {
        'account': 'Statement Savings x8466',
        'status': 'Pending',
        'type': 'Money Transfer DB - Other',
        'amount': -1.25,
        'date': '07/05/2019'
      },
      {
        'account': 'Statement Savings x8466',
        'status': 'Pending',
        'type': 'Money Transfer CR - Other',
        'amount': 1.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Statement Savings x8466',
        'status': 'Pending',
        'type': 'Money Transfer DB - Other',
        'amount': -1.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Statement Savings x8466',
        'status': 'Pending',
        'type': 'Money Transfer DB - Other',
        'amount': -0.10,
        'date': '07/05/2019'
      },
      {
        'account': 'Statement Savings x8466',
        'status': 'Pending',
        'type': 'Money Transfer CR - Other',
        'amount': 0.03,
        'date': '07/05/2019'
      },
      {
        'account': 'Statement Savings x8466',
        'status': 'Pending',
        'type': 'Money Transfer CR - Other',
        'amount': 0.02,
        'date': '07/05/2019'
      },
      {
        'account': 'Statement Savings x8466',
        'status': 'Pending',
        'type': 'Money Transfer DB - Other',
        'amount': -0.02,
        'date': '07/05/2019'
      }
    ]
  },
  {
    'name': 'No Product Desc x8888',
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
    'pendingAvailable': 5714448.67,
    'pendingLedger': 6235440.67,
    'postedTransactions': [
      {
        'account': 'No Product Desc x8888',
        'status': 'Posted',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/04/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Posted',
        'type': 'Detail Deposits',
        'amount': 193598.92,
        'date': '07/04/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Posted',
        'type': 'ZBA Debits',
        'amount': -178652.27,
        'date': '07/04/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Posted',
        'type': 'Lockbox Deposits',
        'amount': 27504.60,
        'date': '07/04/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Posted',
        'type': 'Lockbox Deposits',
        'amount': 14435.00,
        'date': '07/04/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Posted',
        'type': 'Money Transfer CR - Wire',
        'amount': 10390.00,
        'date': '07/04/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Posted',
        'type': 'Miscellaneous Credits',
        'amount': 8460.00,
        'date': '07/04/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Posted',
        'type': 'Miscellaneous Credits',
        'amount': 1850.00,
        'date': '07/04/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Posted',
        'type': 'ACH Debits',
        'amount': -1705.35,
        'date': '07/04/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Posted',
        'type': 'ACH Credits',
        'amount': 100.00,
        'date': '07/04/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Posted',
        'type': 'Money Transfer DB - Other',
        'amount': -100.00,
        'date': '07/04/2019'
      }
    ],
    'pendingTransactions': [
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Money Transfer CR - Wire',
        'amount': 6660995.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 355170.32,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Money Transfer DB - Wire',
        'amount': -300832.59,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Money Transfer DB - Wire',
        'amount': -283000.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Detail Deposits',
        'amount': 193598.92,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Detail Deposits',
        'amount': 193598.92,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Detail Deposits',
        'amount': 193598.92,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Detail Deposits',
        'amount': 193598.92,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Detail Deposits',
        'amount': 193598.92,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Detail Deposits',
        'amount': 193598.92,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Detail Deposits',
        'amount': 193598.92,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Detail Deposits',
        'amount': 193598.92,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Detail Deposits',
        'amount': 193598.92,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Detail Deposits',
        'amount': 193598.92,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'ZBA Debits',
        'amount': -178652.27,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'ZBA Debits',
        'amount': -178652.27,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'ZBA Debits',
        'amount': -178652.27,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'ZBA Debits',
        'amount': -178652.27,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'ZBA Debits',
        'amount': -178652.27,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'ZBA Debits',
        'amount': -178652.27,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'ZBA Debits',
        'amount': -178652.27,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'ZBA Debits',
        'amount': -178652.27,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'ZBA Debits',
        'amount': -178652.27,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'ZBA Debits',
        'amount': -178652.27,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Intl Money Transfer Debits',
        'amount': -161053.19,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Money Transfer DB - Other',
        'amount': -137193.72,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Money Transfer DB - Other',
        'amount': -111174.41,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Intl Money Transfer Credits',
        'amount': 110444.05,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 99560.14,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Money Transfer CR - Other',
        'amount': 71698.24,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Checks Paid',
        'amount': -59900.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'ACH Debits',
        'amount': -33798.51,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Detail Debit Adjustments',
        'amount': -33255.39,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Checks Paid',
        'amount': -28180.30,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 27504.60,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 27504.60,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 27504.60,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 27504.60,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 27504.60,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 27504.60,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 27504.60,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 27504.60,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 27504.60,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 27504.60,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Money Transfer CR - Other',
        'amount': 27439.72,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 21800.19,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 14435.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 14435.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 14435.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 14435.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 14435.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 14435.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 14435.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 14435.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 14435.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 14435.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Detail Deposits',
        'amount': 11671.38,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 10723.53,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Money Transfer CR - Wire',
        'amount': 10390.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Money Transfer CR - Wire',
        'amount': 10390.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Money Transfer CR - Wire',
        'amount': 10390.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Money Transfer CR - Wire',
        'amount': 10390.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Money Transfer CR - Wire',
        'amount': 10390.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Money Transfer CR - Wire',
        'amount': 10390.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Money Transfer CR - Wire',
        'amount': 10390.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Money Transfer CR - Wire',
        'amount': 10390.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Money Transfer CR - Wire',
        'amount': 10390.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Money Transfer CR - Wire',
        'amount': 10390.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'PNC Bank Transfer Credits',
        'amount': 9804.29,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Miscellaneous Credits',
        'amount': 8460.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Miscellaneous Credits',
        'amount': 8460.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Miscellaneous Credits',
        'amount': 8460.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Miscellaneous Credits',
        'amount': 8460.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Miscellaneous Credits',
        'amount': 8460.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Miscellaneous Credits',
        'amount': 8460.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Miscellaneous Credits',
        'amount': 8460.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Miscellaneous Credits',
        'amount': 8460.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Miscellaneous Credits',
        'amount': 8460.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Miscellaneous Credits',
        'amount': 8460.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Miscellaneous Credits',
        'amount': 8460.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'PNC Bank Transfer Debits',
        'amount': -8403.86,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Checks Paid',
        'amount': -7441.84,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Detail Deposits',
        'amount': 7138.71,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Detail Deposits',
        'amount': 7138.71,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Detail Deposits',
        'amount': 6873.75,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Detail Deposits',
        'amount': 6452.07,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Checks Paid',
        'amount': -6254.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Money Transfer DB - Wire',
        'amount': -6000.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Lockbox Deposits',
        'amount': 5578.01,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -5285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x8888',
        'status': 'Pending',
        'type': 'Detail Deposits',
        'amount': 4989.76,
        'date': '07/05/2019'
      }
      // Page 10
    ]
  },
  {
    'name': 'No Product Desc x9999',
    'tasks': [],
    'postedAvailable': 203193.00,
    'postedLedger': 254764.00,
    'pendingAvailable': 5723938.67,
    'pendingLedger': 6234930.67,
    'postedTransactions': [
      {
        'account': 'No Product Desc x9999',
        'status': 'Posted',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/04/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Posted',
        'type': 'Detail Deposits',
        'amount': 193598.92,
        'date': '07/04/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Posted',
        'type': 'ZBA Debits',
        'amount': -178652.27,
        'date': '07/04/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Posted',
        'type': 'Lockbox Deposits',
        'amount': 27504.60,
        'date': '07/04/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Posted',
        'type': 'Lockbox Deposits',
        'amount': 14435.00,
        'date': '07/04/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Posted',
        'type': 'Money Transfer CR - Wire',
        'amount': 10390.00,
        'date': '07/04/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Posted',
        'type': 'Miscellaneous Credits',
        'amount': 8460.00,
        'date': '07/04/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Posted',
        'type': 'Miscellaneous Credits',
        'amount': 1850.00,
        'date': '07/04/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Posted',
        'type': 'ACH Debits',
        'amount': -1705.35,
        'date': '07/04/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Posted',
        'type': 'ACH Credits',
        'amount': 100.00,
        'date': '07/04/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Posted',
        'type': 'Money Transfer DB - Other',
        'amount': -100.00,
        'date': '07/04/2019'
      }
    ],
    'pendingTransactions': [
      {
        'account': 'No Product Desc x9999',
        'status': 'Pending',
        'type': 'Money Transfer CR - Wire',
        'amount': 6660995.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      },
      {
        'account': 'No Product Desc x9999',
        'status': 'Pending',
        'type': 'Corporate Cash Sweep Debits',
        'amount': -375285.00,
        'date': '07/05/2019'
      }
    ]
  },
  {
    'name': 'No Product Desc x08',
    'tasks': [],
    'postedAvailable': null,
    'postedLedger': null,
    'pendingAvailable': null,
    'pendingLedger': null,
    'postedTransactions': [],
    'pendingTransactions': []
  },
  {
    'name': 'Statement Savings x0329',
    'tasks': [],
    'postedAvailable': null,
    'postedLedger': null,
    'pendingAvailable': 498.79,
    'pendingLedger': 498.79,
    'postedTransactions': [],
    'pendingTransactions': [
      {
        'account': 'Statement Savings x0329',
        'status': 'Pending',
        'type': 'Money Transfer CR - Other',
        'amount': 500.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Statement Savings x0329',
        'status': 'Pending',
        'type': 'Money Transfer CR - Other',
        'amount': 10.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Statement Savings x0329',
        'status': 'Pending',
        'type': 'Money Transfer DB - Other',
        'amount': -6.28,
        'date': '07/05/2019'
      },
      {
        'account': 'Statement Savings x0329',
        'status': 'Pending',
        'type': 'Money Transfer DB - Other',
        'amount': -2.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Statement Savings x0329',
        'status': 'Pending',
        'type': 'Money Transfer DB - Other',
        'amount': -1.50,
        'date': '07/05/2019'
      },
      {
        'account': 'Statement Savings x0329',
        'status': 'Pending',
        'type': 'Money Transfer DB - Other',
        'amount': -1.50,
        'date': '07/05/2019'
      },
      {
        'account': 'Statement Savings x0329',
        'status': 'Pending',
        'type': 'Money Transfer CR - Other',
        'amount': 1.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Statement Savings x0329',
        'status': 'Pending',
        'type': 'Money Transfer DB - Other',
        'amount': -1.00,
        'date': '07/05/2019'
      },
      {
        'account': 'Statement Savings x0329',
        'status': 'Pending',
        'type': 'Money Transfer CR - Other',
        'amount': 0.10,
        'date': '07/05/2019'
      },
      {
        'account': 'Statement Savings x0329',
        'status': 'Pending',
        'type': 'Money Transfer DB - Other',
        'amount': -0.03,
        'date': '07/05/2019'
      },
      {
        'account': 'Statement Savings x0329',
        'status': 'Pending',
        'type': 'Money Transfer CR - Other',
        'amount': 0.02,
        'date': '07/05/2019'
      },
      {
        'account': 'Statement Savings x0329',
        'status': 'Pending',
        'type': 'Money Transfer DB - Other',
        'amount': -0.02,
        'date': '07/05/2019'
      }
    ]
  },
  {
    'name': 'No Product Desc x1091',
    'tasks': [],
    'postedAvailable': null,
    'postedLedger': null,
    'pendingAvailable': 10.00,
    'pendingLedger': 10.00,
    'postedTransactions': [],
    'pendingTransactions': [
      {
        'account': 'No Product Desc x1091',
        'status': 'Pending',
        'type': 'Money Transfer CR - Other',
        'amount': 10.00,
        'date': '07/05/2019'
      }
    ]
  }
];


// ----- ALL ACCOUNTS ----- //

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


// ----- ACCOUNT BOX ----- //

function createAccountIconObj(isAccountAll) {
  let accountIconObj = document.createElement('img');
  accountIconObj.className = 'icon';
  if (isAccountAll) {
    accountIconObj.src = 'images/account-all.svg';
  } else {
    accountIconObj.src = 'images/account-default.svg';
  }
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


// ----- ACCOUNTS ----- //

function setAccounts() {  
  // Reset
  accountContainerObj.innerHTML = '';
    
  for (let i = 0; i < accounts.length; i++) {
    let accountObj = createAccountObj(accounts[i], i === 0);
    accountContainerObj.appendChild(accountObj);
  }
  
  accountContainerObj.appendChild(createAddAccountObj());
  
  let accountObjs = document.getElementsByClassName('account');
  if (curr === 0) {
    accountObjs[curr].classList.add('account-all-selected');
  } else {
    accountObjs[curr].classList.add('account-selected');
  }
  
  // Add event listeners (except Add Account or Group)
  for (let i = 0; i < accountObjs.length - 1; i++) {
    accountObjs[i].addEventListener('click', function() {
      if (i === 0) {
        accountObjs[curr].classList.remove('account-selected');
        accountObjs[i].classList.add('account-all-selected');
      } else {
        if (curr === 0) {
          accountObjs[curr].classList.remove('account-all-selected');
        } else {
          accountObjs[curr].classList.remove('account-selected');
        }
        accountObjs[i].classList.add('account-selected');
      }
      curr = i;
      setAccount();
    });
  }
  
  setAccount();
}


// ----- TRANSACTION TABLE ----- //

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
  
  if (task.tag === 'complete') {
    taskObj.classList.add('tag-complete');
  } else if (task.tag === 'attention') {
    taskObj.classList.add('tag-attention');
  } else if (task.tag === 'alert') {
    taskObj.classList.add('tag-alert');
  } else if (task.tag === 'links') {
    taskObj.classList.add('tag-links');
  } else if (task.tag === 'locked') {
    taskObj.classList.add('tag-locked');
  } else if (task.tag === 'company') {
    taskObj.classList.add('tag-company');
  }

  taskObj.appendChild(numObj);
  taskObj.appendChild(nameObj);
  taskObj.appendChild(detailsObj);
  taskObj.appendChild(dueObj);
  
  return taskObj;
}


// ----- TASKS LIST ----- //

function setTasks(tasks) {
  // Reset tasks
  let taskContainerObj = document.getElementById('task-container');
  if (taskContainerObj !== null) {
    rightObj.removeChild(taskContainerObj);
  }
  let noTasksObj = document.getElementById('no-tasks');
  if (noTasksObj !== null) {
    rightObj.removeChild(noTasksObj);
  }
  
  let newTaskContainerObj = document.createElement('div');
  newTaskContainerObj.id = 'task-container';
  rightObj.appendChild(newTaskContainerObj);
  
  if (tasks.length === 0) {
    let newNoTasksObj = document.createElement('div');
    newNoTasksObj.id = 'no-tasks';
    newNoTasksObj.innerHTML = 'You have no outstanding tasks.';
    newTaskContainerObj.appendChild(newNoTasksObj);
  } else {
    for (let i = 0; i < tasks.length; i++) {
      newTaskContainerObj.appendChild(createTaskObj(tasks[i], i));
    }
  }
}


// ----- ACCOUNT ----- //

function setAccount() {
  // ----- ACCOUNT NAME ----- //
  accountNameObjs[0].innerHTML = accounts[curr].name;
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
  
  // ----- BALANCE CONTAINER ----- //
  if (available === null) {
    amountAvailableObj.innerHTML = '---';
  } else {
    if (available < 0) {
      amountAvailableObj.className = 'negative';
    } else {
      amountAvailableObj.classList.remove('negative');
    }
    amountAvailableObj.innerHTML = formatAmount(available);
  }
  
  if (ledger === null) {
    amountLedgerObj.innerHTML = '---';
  } else {
    if (ledger < 0) {
      amountLedgerObj.className = 'negative';
    } else {
      amountLedgerObj.classList.remove('negative');
    }
    amountLedgerObj.innerHTML = formatAmount(ledger);
  }
  
  // ----- TABLE ----- //
  // Reset table
  let tableObj = document.getElementById('transaction-container');
  if (tableObj !== null) {
    leftObj.removeChild(tableObj);
  }
  let noTransactionObj = document.getElementById('no-transaction');
  if (noTransactionObj !== null) {
    leftObj.removeChild(noTransactionObj);
  }
  
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
  
  let newTableObj = document.createElement('table');
  newTableObj.id = 'transaction-container';
  newTableObj.appendChild(trObj);
  
  leftObj.appendChild(newTableObj);
  
  // ----- AMOUNT IN & OUT ----- //
  let amountIn = 0;
  let amountOut = 0;
  
  if (transactions.length === 0) {
    let newNoTransactionObj = document.createElement('p');
    newNoTransactionObj.id = 'no-transaction';
    newNoTransactionObj.innerHTML = 'The data is not currently available.';
    leftObj.appendChild(newNoTransactionObj);
  } else {
    transactions.forEach((transaction) => {
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
  
  let tasks = accounts[curr].tasks;
  setTasks(tasks);
}

setAccounts();


// ----- QUICK HELP ----- //

let helpObj = document.getElementById('help');
let helpContainerObj = document.getElementById('help-container');
let helpIconObj = document.getElementById('help-icon')
let helpCloseIconObj = document.getElementById('help-close-icon');

helpObj.addEventListener('click', function() {
  if (helpContainerObj.style.opacity === '1') {
    helpContainerObj.style.opacity = 0;
    helpContainerObj.style.visibility = 'hidden';
    helpIconObj.style.display = 'inline';
    helpCloseIconObj.style.display = 'none';
  } else {
    helpContainerObj.style.opacity = 1;
    helpContainerObj.style.visibility = 'visible';
    helpIconObj.style.display = 'none';
    helpCloseIconObj.style.display = 'inline';
  }
});