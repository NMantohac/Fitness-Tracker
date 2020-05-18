const router = require('express').Router();
const workoutController = require('../../../controllers/workoutController');

// /api/workouts prepended here

// /api/workouts
router.route('/')
  .get(workoutController.getLastWorkout)
  .post(workoutController.createWorkout);

// /api/workouts/range
router.route('/range')
  .get(workoutController.getWorkoutsInRange);

// /api/workouts/:id
router.route('/:id')
  .put(workoutController.addExercise);

module.exports = router;
