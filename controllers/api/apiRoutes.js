const router = require('express').Router();
const { Client } = require('podcast-api');
const { Stash } = require ('../../models');

router.post('/', async (req, res) => {
  try {
    const StashData = await Stash.create({
      title_original: req.body.title_original,
      link: req.body.link,
      thumbnail: req.body.thumbnail,
      publisher_original: req.body.publisher_original,
      total_episodes: req.body.total_episodes,
      description_original: req.body.description_original,
    });
    req.session.save(() => {
      res.status(200).json(StashData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//const podcast = JSON.parse(stashItem);

router.post('/', async (req, res) => {
  try {
    const StashData = await Stash.create({
      title_original: req.body.title_original,
      link: req.body.link,
      thumbnail: req.body.thumbnail,
      publisher_original: req.body.publisher_original,
      total_episodes: req.body.total_episodes,
      description_original: req.body.description_original,
    });
    req.session.save(() => {
      res.status(200).json(StashData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//destroy-- remove from stash

module.exports = router;