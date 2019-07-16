let paymentModalObj = document.getElementById('payment-modal');
let paymentModalContentObj = document.getElementById('payment-modal-content');

function openPaymentModal() {
  paymentModalObj.classList.add('modal-visible');
  paymentModalContentObj.classList.add('modal-content-visible');
}

function closePaymentModal() {
  paymentModalObj.classList.remove('modal-visible');
  paymentModalContentObj.classList.remove('modal-content-visible');
}

let paymentObj = document.getElementById('payment');
paymentObj.addEventListener('click', function() {
  openPaymentModal();
});

let modalCloseIconObj = document.getElementById('modal-close-icon');
let submitObj = document.getElementById('submit');

modalCloseIconObj.addEventListener('click', function() {
  closePaymentModal();
});

submitObj.addEventListener('click', function() {
  closePaymentModal();
});