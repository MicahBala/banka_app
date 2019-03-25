"use strict";

const btnNewAccount = document.querySelector(".create-new-account");
const newAccountModal = document.querySelector(".bg-modal");
const closeModal = document.querySelector(".modal-close");

btnNewAccount.addEventListener("click", () => {
  newAccountModal.classList.add("modal-active");
});

closeModal.addEventListener("click", () => {
  newAccountModal.classList.remove("modal-active");
});
