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
  try {
    const searchResults = client.search({
      q: 'wine',
      sort_by_date: 0,
      type: 'podcast',
      offset: 0,
      published_after: 0,
      only_in: 'title,description',
      language: 'English',
      safe_mode: 0,
    })
      .then((response) => {
        const podcasts = response.data.results.map(podcast => {
          return {title_original: podcast.title_original,
            link: podcast.website,
            thumbnail: podcast.thumbnail,
            publisher: podcast.publisher_original,
            episodes: podcast.total_episodes,
            description: podcast.description_original}
        })  ;
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
        const podcasts = response.data.results.map(podcast => {
          return {title_original: podcast.title_original,
            link: podcast.website,
            thumbnail: podcast.thumbnail,
            publisher: podcast.publisher_original,
            episodes: podcast.total_episodes,
            description: podcast.description_original}
        })  ;
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

router.get('/results/:keyword/:genre', (req, res) => {
  try {
    client.search({
      q: req.params.keyword,
      sort_by_date: 0,
      type: 'podcast',
      offset: 0,
      genre_ids: req.params.genre,
      only_in: 'title,description',
      language: 'English',
      safe_mode: 0,
    })
      .then((response) => {
        const podcasts = response.data.results.map(podcast => {
          return {title_original: podcast.title_original,
            link: podcast.website,
            thumbnail: podcast.thumbnail,
            publisher: podcast.publisher_original,
            episodes: podcast.total_episodes,
            description: podcast.description_original}
        })  ;
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

// /stash to render stash page
// remove button function

module.exports = router;