const Pool = require("pg").Pool;
const PG_PASS = require('./config.js');
const pool = new Pool({
  user: "postgres",
  password: PG_PASS,
  database: "Reviews",
  host: "localhost",
  port: 5432
});

module.exports = pool;