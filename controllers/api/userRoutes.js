const router = require('express').Router();
const { User } = require('../../models');

// new user (CREATE)
router.post('/', async (req, res) => {
  try {
    const UserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = UserData.id;
      req.session.loggedIn = true;

      res.status(200).json({ user: UserData, session: req.session.user_id });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// login (READ)
router.post('/login', async (req, res) => {
  try {
    const UserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!UserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await UserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = UserData.id;
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: UserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// logout (DELETE)
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;
