const router = require('express').Router();
const { Client } = require('podcast-api');
const dotenv = require('dotenv').config();
const client = Client({
  apiKey: process.env.API_KEY || null
});


// Login route
router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/search', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('search');
});
module.exports = router;



router.post('/results', (req, res) => {
  // const keyword = JSON.parse(localStorage.getItem('keyword'));
  // const genre = JSON.parse(localStorage.getItem('genres'));
  try {
    const searchResults = client.search({
      q: req.body.keyWord,
      sort_by_date: 0,
      type: 'podcast',
      offset: 0,
      published_after: 0,
      only_in: 'title,description',
      language: 'English',
      safe_mode: 0,
    })
      .then((response) => {
        const podcasts = response.data.results;
        // res.json(podcasts);  //uncomment this line for insomnia test
        res.render('results', {
          podcasts
        });
      });
  }
  catch (err) {
    res.status(500).json(err);
  }
});
router.get('/results/:keyword', (req, res) => {
  // const keyword = JSON.parse(localStorage.getItem('keyword'));
  // const genre = JSON.parse(localStorage.getItem('genres'));
  try {
    const searchResults = client.search({
      q: req.params.keyword,
      sort_by_date: 0,
      type: 'podcast',
      offset: 0,
      published_after: 0,
      only_in: 'title,description',
      language: 'English',
      safe_mode: 0,
    })
      .then((response) => {
        const podcasts = response.data.results;
        // res.json(podcasts);  //uncomment this line for insomnia test
        res.render('results', {
          podcasts
        });
      });
  }
  catch (err) {
    res.status(500).json(err);
  }
});
/*
router.get('/results', (req, res) => {
  // const keyword = JSON.parse(localStorage.getItem('keyword'));
  // const genre = JSON.parse(localStorage.getItem('genres'));
  try {
    const searchResults = client.search({
      q: req.body.keyWord,
      sort_by_date: 0,
      type: 'podcast',
      offset: 0,
      published_after: 0,
      only_in: 'title,description',
      language: 'English',
      safe_mode: 0,
    })
      .then((response) => {
        const podcasts = response.data.results;
        // res.json(podcasts);  //uncomment this line for insomnia test
        res.render('results', {
          podcasts
        });
      });
  }
  catch (err) {
    res.status(500).json(err);
  }
});
*/

module.exports = router;