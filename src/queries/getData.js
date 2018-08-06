// Add code below to query your database
const dbConnection = require('../database/db_connection');

const getData = (cb) => {
  const queryText = {
    text: 'SELECT * FROM users'
  }
  dbConnection.query(queryText, (err, result) => {
    if (err) return cb(err);
    cb(null, result);
  })
}

module.exports = getData;
