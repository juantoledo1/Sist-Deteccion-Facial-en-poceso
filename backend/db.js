const mysql = require("mysql2/promise");

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "Sinley123.",
  database: "bd_fenix",
};

const pool = mysql.createPool(dbConfig);

module.exports = pool;
