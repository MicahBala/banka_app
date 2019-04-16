'use strict';

const signUp = document.querySelectorAll('.btn-signup');
const login = document.querySelector('.btn-login');
const signupModal = document.querySelector('.bg-modal');
const loginModal = document.querySelector('.bg-login-modal');
const closeModal = document.querySelectorAll('.modal-close');
const formSignUp = document.querySelector('.formBtnSignup');
const formLogin = document.querySelector('.formBtnLogin');

signUp.forEach(btn => {
  btn.addEventListener('click', () => {
    signupModal.classList.add('modal-active');
  });
});

login.addEventListener('click', () => {
  loginModal.classList.add('modal-active');
});

closeModal.forEach(close => {
  close.addEventListener('click', () => {
    signupModal.classList.remove('modal-active');
    loginModal.classList.remove('modal-active');
  });
});

formSignUp.addEventListener('click', () => {
  window.location.href = 'user-dashboard.html';
});

formLogin.addEventListener('click', () => {
  window.location.href = 'cashier.html';
});
