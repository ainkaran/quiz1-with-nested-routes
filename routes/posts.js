const express = require('express');
const router = express.Router();
const db = require('../db');



router.get('/new', (req, res) => {
  console.log('testing')
  res.render('posts/new', {tweets: undefined})
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
      res.render('posts/show', {tweets: tweet});
    })
    .catch(err => res.send(err));
});

// posts#tweets URL: /tweets HTTP VERB: POST
router.post('/new', (req, res) => {
  const tweet = req.body;

  // {author: ww, content: wyywgu}
  console.log('this is a test:',tweet);

  let previousTweets = req.cookies.tweets || [];

  previousTweets.push(tweet);

  console.log(previousTweets, "again test");

// [{author: ww, content: wgw}, {author: ww, content: wgw}]

  res.cookie('tweets', previousTweets, {maxAge: 1000*60*60*24});
  // the maxAge option determines how long a cookie will last in milliseconds

  // res.redirect tells the browser, in the response, to go to the given URL
  res.render('posts/new', {tweets: previousTweets});


})


module.exports = router;
