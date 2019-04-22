const pool = require('./db_connect');

// Create user table
const createUserTable = () => {
  const createTable = `CREATE TABLE IF NOT EXISTS
    banka_users (
      id BIGSERIAL NOT NULL PRIMARY KEY,
      first_name VARCHAR(50),
      last_name VARCHAR(50),
      email VARCHAR(50) UNIQUE,
      user_password VARCHAR(50),
      type_of_user VARCHAR(10),
      isAdmin BOOLEAN
  )`;

  pool
    .query(createTable)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
};

const createAccountTable = () => {
  const createTable = `CREATE TABLE IF NOT EXISTS
    banka_accounts (
      account_number BIGINT NOT NULL PRIMARY KEY,
      type_of_account VARCHAR(10),
      account_balance FLOAT,
      account_status VARCHAR(10),
      created_on TIMESTAMP DEFAULT NOW(),
      owner BIGINT REFERENCES banka_users (id)
  )`;

  pool
    .query(createTable)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
};

const createTransactionTable = () => {
  const createTable = `CREATE TABLE IF NOT EXISTS
    banka_transactions (
      transaction_id BIGSERIAL NOT NULL PRIMARY KEY,
      created_on TIMESTAMP DEFAULT NOW(),
      transaction_type VARCHAR(10),
      cashier INT,
      amount FLOAT,
      old_balance FLOAT,
      new_balance FLOAT,
      user_account_number BIGINT REFERENCES banka_accounts (account_number)
  )`;

  pool
    .query(createTable)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
};

module.exports = {
  createUserTable,
  createAccountTable,
  createTransactionTable,
  pool
};

require('make-runnable');
