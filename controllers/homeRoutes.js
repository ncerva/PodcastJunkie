const router = require('express').Router();
const { Client } = require('podcast-api');
const dotenv = require('dotenv').config();
const withAuth = require('../utils/auth')
const client = Client({
  apiKey: process.env.API_KEY || null
});
const { Stash, User } = require('../models');

// Login route
router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/search');
    return;
  }
  res.render('login');
});

router.get('/search', withAuth, (req, res) => {
  res.render('search', {
    loggedIn: req.session.loggedIn
  });
});
module.exports = router;



router.get('/results', withAuth, (req, res) => {
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
          return {
            title_original: podcast.title_original,
            link: podcast.website,
            thumbnail: podcast.thumbnail,
            publisher: podcast.publisher_original,
            episodes: podcast.total_episodes,
            description: podcast.description_original
          };
        });
        // res.json(podcasts);  //uncomment this line for insomnia test
        res.render('results', {
          podcasts,
          loggedIn: req.session.loggedIn
        });
      });
  }
  catch (err) {
    res.status(500).json(err);
  }
});


router.get('/results/:keyword', withAuth, (req, res) => {
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
        });
        // res.json(podcasts);  //uncomment this line for insomnia test
        res.render('results', {
          podcasts,
          loggedIn: req.session.loggedIn
        });
      });
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/results/:keyword/:genre', withAuth, (req, res) => {
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
        });
        // res.json(podcasts);  //uncomment this line for insomnia test
        res.render('results', {
          podcasts,
          loggedIn: req.session.loggedIn
        });
      });
  }
  catch (err) {
    res.status(500).json(err);
  }
});

// /stash to render stash page
router.get('/stash', withAuth, async (req, res) => {
  try {
    const stashData = await Stash.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ['id'],
        },
      ],
    });
      const podcasts = stashData.map((podcast) => podcast.get({ plain: true}));
    res.render('stash', {
      podcasts,
      loggedIn: req.session.loggedIn
    });
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;