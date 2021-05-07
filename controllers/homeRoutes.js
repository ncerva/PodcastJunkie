const router = require('express').Router();
const { Client } = require('podcast-api');
const dotenv = require('dotenv');
require('dotenv').config();

const client = Client({
  apiKey: process.env.API_KEY || null,
});





// Login route
router.get('/', (req, res) => {
  if (!req.session.loggedIn) {
    res.render('login');
    return;
  }
  res.render('stash');
});

router.get('/results', (req, res) => {
  try {
    const searchResults = client.search({
      q: 'elon',
      sort_by_date: 0,
      type: 'episode',
      offset: 0,
      published_after: 0,
      only_in: 'title,description',
      language: 'English',
      safe_mode: 0,
    })
      .then((response) => {
        const podcasts = response.data.results;
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