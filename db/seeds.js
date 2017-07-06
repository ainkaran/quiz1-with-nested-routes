const db = require('./index');
const faker = require('faker');

db.query(`
  INSERT INTO tweets (content, author)
  VALUES ($<content>, $<author>)
  `, {
    content: faker.hacker.phrase(),
    author: faker.name.findName()
})
  .then(() => {
    console.log('🔨 Created a tweet!');
    process.exit();
  })
