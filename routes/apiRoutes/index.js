const router = require('express').Router();
const workoutsRoutes = require('./workoutsRoutes');

// /api prepended here

// /api/workouts
router.use('/workouts', workoutsRoutes);

module.exports = router;
