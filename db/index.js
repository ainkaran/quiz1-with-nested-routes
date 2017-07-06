const pgp = require('pg-promise')();
const db = pgp({
  host: 'localhost',
  database: 'tweet_dev'
});

module.exports = db;
