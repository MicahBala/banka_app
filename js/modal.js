"use strict";

const signUp = document.querySelectorAll(".btn-signup");
const modal = document.querySelector(".bg-modal");
const closeModal = document.querySelector(".modal-close");

signUp.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.classList.add("modal-active");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("modal-active");
});
