// Add code below to connect to your database
const pg = require('pg');
require('env2')('./config.env');
// const url = require('url');
if (!process.env.DB_URL) throw new Error('DB_URL missing');

// const params = url.parse(process.env.DB_URL);

// const [username, password] = params.auth.split(':');

// const options = {
//   password,
//   user: username,
//   port: params.port,
//   host: params.hostname,
//   database: params.pathname.split('/')[1],
//   ssl: true
// };

const options = {
  ssl: true,
  connectionString: process.env.DB_URL
}

module.exports = new pg.Pool(options);
