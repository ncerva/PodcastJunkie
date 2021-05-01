const router = require('express').Router();

const apiRoutes = require('./apiRoutes');

router.use('/api', apiRoutes);

const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

module.exports = router;