const router = require('express').Router();
const workoutController = require('../../../controllers/workoutController');

// /api/workout prepended here

// /api/workout
router.route('/')
  .get(workoutController.getLastWorkout)
  .post(workoutController.createWorkout);

// /api/workout/range
router.route('/range')
  .get(workoutController.getWorkoutsInRange);

// /api/workout/:id
router.route('/:id')
  .put(workoutController.addExercise);

module.exports = router;
