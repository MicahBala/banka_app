const pool = require('./db_connect');

// Create user table
const createUserTable = () => {
  const createTable = `CREATE TABLE IF NOT EXISTS
    banka_users (
      id BIGSERIAL NOT NULL PRIMARY KEY,
      first_name VARCHAR(50),
      last_name VARCHAR(50),
      email VARCHAR(50),
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

module.exports = { createUserTable, pool };

require('make-runnable');
