'use strict';

const btnNewAccount = document.querySelector('.create-new-account');
const newAccountModal = document.querySelector('.bg-modal');
const closeModal = document.querySelector('.modal-close');

const transactionHistory = document.querySelector('.viewTransaction');
const transactionModal = document.querySelector('.bg-transaction-modal');
const closeTransactionModal = document.querySelector(
  '.modal-transaction-close'
);

const dashboardMenu = document.querySelector('.dashboard-menu');

// New Account Modal
btnNewAccount.addEventListener('click', () => {
  newAccountModal.classList.add('modal-active');
  btnNewAccount.classList.add('active-menu');
  dashboardMenu.classList.remove('active-menu');
});

closeModal.addEventListener('click', () => {
  newAccountModal.classList.remove('modal-active');
  btnNewAccount.classList.remove('active-menu');
  dashboardMenu.classList.add('active-menu');
});

// Transaction Modal
// transactionHistory.addEventListener('click', () => {
//   transactionModal.classList.add('modal-active');
// });

closeTransactionModal.addEventListener('click', () => {
  transactionModal.classList.remove('modal-active');
});
