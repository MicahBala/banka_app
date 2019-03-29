"use strict";

const users = document.querySelector(".header-admin-area-users");
const usersTable = document.querySelector(".table-users");

const accounts = document.querySelector(".header-admin-area-accounts");
const accountsTable = document.querySelector(".table-accounts");

const title = document.querySelector(".header-admin-area-display");

users.addEventListener("click", () => {
  accountsTable.classList.remove("show-table");
  usersTable.classList.remove("hide-table");

  accountsTable.classList.add("hide-table");
  usersTable.classList.add("show-table");

  title.innerText = "USERS LIST";
});

accounts.addEventListener("click", () => {
  accountsTable.classList.remove("hide-table");
  usersTable.classList.remove("show-table");

  accountsTable.classList.add("show-table");
  usersTable.classList.add("hide-table");

  title.innerText = "BANK ACCOUNTS";
});
