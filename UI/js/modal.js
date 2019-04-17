'use strict';

const signUp = document.querySelectorAll('.btn-signup');
const login = document.querySelector('.btn-login');
const signupModal = document.querySelector('.bg-modal');
const loginModal = document.querySelector('.bg-login-modal');
const closeModal = document.querySelectorAll('.modal-close');
const formSignUp = document.querySelector('.formBtnSignup');
const formLogin = document.querySelector('.formBtnLogin');
const userRole = document.getElementById('user-role');

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
  console.log(userRole.value);
  if (userRole.value == 'admin') {
    window.location.href = 'admin.html';
  }

  if (userRole.value == 'cashier') {
    window.location.href = 'cashier.html';
  }

  if (userRole.value == 'client') {
    window.location.href = 'user-dashboard.html';
  }
});
