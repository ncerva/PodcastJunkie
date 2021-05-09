const router = require('express').Router();
const { response } = require('express');
const { Client } = require('podcast-api');
const { Stash } = require ('../../models');

router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const StashData = await Stash.create(
      req.body
    );
    req.session.save(() => {
      res.status(200).json(StashData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// /stash to render stash page
router.get('/stash', (req, res) => {
  try {
    
    res.render('stash', {
      podcasts,
      loggedIn: req.session.loggedIn
    });
  }
  catch (err) {
    res.status(500).json(err);
  }
})
// remove button function
router.post('/stash', (req,res) => {
  req.body.destroy(() => {

  })
})


module.exports = router;