'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'Digimon_db', // Make sure this is the correct host name
  user: 'Digimon',
  password: 'Digimon',
  database: 'digimon',
  port: 3306
});

connection.connect(function (err) {
  if (err) {
    console.log('Error on database connection.');
    throw err;
  }
  console.log('Database connection active.');
});

module.exports = connection;
