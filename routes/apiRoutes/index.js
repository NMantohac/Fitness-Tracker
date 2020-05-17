const router = require('express').Router();
const workoutRoutes = require('./workoutRoutes');

// /api prepended here

// /api/workout
router.use('/workout', workoutRoutes);

module.exports = router;
