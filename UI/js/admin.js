'use strict';

const users = document.querySelector('.header-admin-area-users');
const usersTable = document.querySelector('.table-users');

const accounts = document.querySelector('.header-admin-area-accounts');
const accountsTable = document.querySelector('.table-accounts');

const adminMenu = document.querySelector('.dashboard-menu');

const modal = document.querySelector('.bg-delete-account-modal');
const btnDelete = document.querySelectorAll('.delete-account');

const title = document.querySelector('.header-admin-area-display');

const btnCancel = document.querySelector('.btn-cancel');
const btnConfirm = document.querySelector('.btn-confirm');

const addUserMenu = document.querySelector('.header-admin-area-add-user');
const addUserModal = document.querySelector('.bg-add-user-account-modal');

const closeModal = document.querySelector('.modal-close');

users.addEventListener('click', () => {
  accountsTable.classList.remove('show-table');
  usersTable.classList.remove('hide-table');

  accountsTable.classList.add('hide-table');
  usersTable.classList.add('show-table');
  users.classList.add('active-menu');
  accounts.classList.remove('active-menu');
  adminMenu.classList.remove('active-menu');

  title.innerText = 'USERS LIST';
});

accounts.addEventListener('click', () => {
  accountsTable.classList.remove('hide-table');
  usersTable.classList.remove('show-table');

  accountsTable.classList.add('show-table');
  usersTable.classList.add('hide-table');
  users.classList.remove('active-menu');
  accounts.classList.add('active-menu');
  adminMenu.classList.remove('active-menu');

  title.innerText = 'BANK ACCOUNTS';
});

btnDelete.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('modal-active');
  });
});

btnCancel.addEventListener('click', () => {
  modal.classList.remove('modal-active');
});

btnConfirm.addEventListener('click', () => {
  modal.classList.remove('modal-active');
});

addUserMenu.addEventListener('click', () => {
  addUserModal.classList.add('modal-active');
});

closeModal.addEventListener('click', () => {
  addUserModal.classList.remove('modal-active');
});
