const dbConnection = require('./db_connection');
const fs = require('fs');
const path = require('path');

const sql = fs.readFileSync(path.join(__dirname, 'db_build.sql')).toString('utf-8');

dbConnection.query(sql, (err, result) => {
  if (err) throw new Error('Error building database');
  console.log('Database have been built');
});
