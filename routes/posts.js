const express = require('express');
const router = express.Router();
const db = require('../db');



router.get('/new', (req, res) => {
  console.log('testing')
  res.render('posts/new', {posts: undefined})
})




/*
// posts#tweets URL: /tweets HTTP VERB: POST
router.post('/new', (req, res) => {
  const tweet = req.body;
  console.log('this is a test:',tweet);

  db.query(`
    INSERT INTO tweets (content, author) VALUES ($<content>, $<author>)
  `, tweet
  ).then(() => {
    db.query(`SELECT * FROM tweets`)
    .then(response => {
      console.log('it works',)
      res.render('new', {tweets: response, test:'is it working'})
    })
  }).catch(error => {
    console.log('is there an error')
    res.send(error)
  })
})

// posts#index URL: /posts HTTP VERB: GET
router.get('/', (req, res) => {
  db.query(
    `SELECT * FROM tweets ORDER BY id DESC`
  )
    .then(tweets => {
      res.render('posts/index', {tweets: tweets});
    })
});

// posts#show URL: /posts/:id HTTP VERB: GET
router.get('/:id', (req, res) => {
  const {id} = req.params;
  // const id = req.params.id;
  db.one(
    `SELECT * FROM tweets WHERE id = $<id> LIMIT 1`,
    {id: id}
  )
    .then(tweet => {
      res.render('posts/show', {tweet: tweet});
    })
    .catch(err => res.send(err));
});
*/
module.exports = router;
