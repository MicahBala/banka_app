"use strict";

const signUp = document.querySelectorAll(".btn-signup");
const login = document.querySelector(".btn-login");
const signupModal = document.querySelector(".bg-modal");
const loginModal = document.querySelector(".bg-login-modal");
const closeModal = document.querySelectorAll(".modal-close");

signUp.forEach(btn => {
  btn.addEventListener("click", () => {
    signupModal.classList.add("modal-active");
  });
});

login.addEventListener("click", () => {
  loginModal.classList.add("modal-active");
});

closeModal.forEach(close => {
  close.addEventListener("click", () => {
    signupModal.classList.remove("modal-active");
    loginModal.classList.remove("modal-active");
  });
});
