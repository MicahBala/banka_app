const pg = require('pg');

const config = {
  user: 'postgres',
  host: 'localhost',
  database: 'the_banka',
  password: 'micahbala',
  port: 5432
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
  console.log('Database connection SUCCESSFULL!!!');
});

module.exports = pool;
