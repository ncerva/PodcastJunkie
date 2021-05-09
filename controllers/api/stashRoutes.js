const router = require('express').Router();
const { response } = require('express');
const { Client } = require('podcast-api');
const { Stash } = require ('../../models');
const withAuth = require('../../utils/auth');

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

// remove button function
router.delete('/:id', async (req,res) => {
  try {
    const stashData = await Stash.destroy({
      where: {
        id: req.params.id,

      },
    }); 
    if (!stashData) {
      res.status(404).json({ message: 'No podcast found with this id'});
      return;
    } 
    res.status(200).json(stashData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;