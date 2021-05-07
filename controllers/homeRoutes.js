const router = require('express').Router();
const { Client } = require('podcast-api');
const dotenv = require('dotenv').config();
const client = Client({
  apiKey: process.env.API_KEY || null
});


// Login route
router.get('/', (req, res) => {
  if (!req.session.loggedIn) {
    res.render('login');
    return;
  }
  res.render('stash');
});

router.get('/search', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('search');
});
module.exports = router;



router.get('/results', (req, res) => {
  // const keyword = JSON.parse(localStorage.getItem('keyword'));
  // const genre = JSON.parse(localStorage.getItem('genres'));
  try {
    const searchResults = client.search({
      q: 'music',
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
        // res.json(podcasts);
        res.render('results', {
          podcasts
        });
      });
  }
  catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;