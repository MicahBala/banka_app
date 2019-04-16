'use strict';

const closeCashierAcctModal = document.querySelector('.modal-cashier-close');

const creditDebitModal = document.querySelector('.bg-credit-debit-modal');
const closeCreditDebitAcctModal = document.querySelector(
  '.modal-credit-debit-close'
);

const creditAccount = document.querySelector('.credit-account');
const debitAccount = document.querySelector('.debit-account');

const transactionTitle = document.querySelector('.credit-account-title');
const creditAmount = document.getElementById('credit-amount-label');
const creditBtn = document.getElementById('credi-account-btn');

// Credit Account Modal
creditAccount.addEventListener('click', () => {
  creditDebitModal.classList.add('modal-active');
});

closeCreditDebitAcctModal.addEventListener('click', () => {
  creditDebitModal.classList.remove('modal-active');
});

// Debit Account Modal
debitAccount.addEventListener('click', () => {
  creditDebitModal.classList.add('modal-active');
  transactionTitle.innerText = 'DEBIT ACCOUNT';
  creditAmount.innerText = 'AMOUNT TO DEBIT';
  creditBtn.innerText = 'Debit Account';
});

closeCreditDebitAcctModal.addEventListener('click', () => {
  creditDebitModal.classList.remove('modal-active');
  transactionTitle.innerText = 'CREDIT ACCOUNT';
  creditAmount.innerText = 'AMOUNT TO CREDIT';
  creditBtn.innerText = 'Credit Account';
});
