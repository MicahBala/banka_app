"use strict";

const cashierAcctModal = document.querySelector(".bg-cashier-modal");
const closeCashierAcctModal = document.querySelector(".modal-cashier-close");

const accountHistory = document.querySelector(".acct-view");

// Transaction History Modal
accountHistory.addEventListener("click", () => {
  cashierAcctModal.classList.add("modal-active");
  console.log(cashierAcctModal);
});

closeCashierAcctModal.addEventListener("click", () => {
  cashierAcctModal.classList.remove("modal-active");
});

// Credit/Debit Account Modal
// transactionHistory.addEventListener("click", () => {
//   transactionModal.classList.add("modal-active");
// });

// closeTransactionModal.addEventListener("click", () => {
//   transactionModal.classList.remove("modal-active");
// });
