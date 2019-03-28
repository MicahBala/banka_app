"use strict";

const cashierAcctModal = document.querySelector(".bg-cashier-modal");
const closeCashierAcctModal = document.querySelector(".modal-cashier-close");

const creditDebitModal = document.querySelector(".bg-credit-debit-modal");
const closeCreditDebitAcctModal = document.querySelector(
  ".modal-credit-debit-close"
);

const accountHistory = document.querySelector(".acct-view");
const creditDebitAccount = document.querySelector(".credit-debit");

// Transaction History Modal
accountHistory.addEventListener("click", () => {
  cashierAcctModal.classList.add("modal-active");
  console.log(cashierAcctModal);
});

closeCashierAcctModal.addEventListener("click", () => {
  cashierAcctModal.classList.remove("modal-active");
});

// Credit/Debit Account Modal
creditDebitAccount.addEventListener("click", () => {
  creditDebitModal.classList.add("modal-active");
});

closeCreditDebitAcctModal.addEventListener("click", () => {
  creditDebitModal.classList.remove("modal-active");
});
