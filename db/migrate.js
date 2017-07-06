const db = require('./index');

db.query(`
  CREATE TABLE tweets (
    id SERIAL,
    content VARCHAR(255),
    author VARCHAR(255)
  )
`)
  .then(() => {
    console.log('🛠 Created table tweets!');
    // process is a global object provided by node (only)
    // that gives access to the running program. We can use it
    // to exit the program amongst other things.
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit();
  })
