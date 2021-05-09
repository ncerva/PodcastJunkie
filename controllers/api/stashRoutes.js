const router = require('express').Router();
const { response } = require('express');
const { Client } = require('podcast-api');
const { Stash } = require ('../../models');

router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const StashData = await Stash.create(
      req.body,
      
    );
    req.session.save(() => {
      res.status(200).json(StashData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/', (req, res) => {
  res.send("hello from stash")
})
//destroy-- remove from stash

module.exports = router;