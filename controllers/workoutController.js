const { Workout } = require('../models');

module.exports = {
  // Finds all workouts in the database, but returns the most recent workout in the front-end
  getLastWorkout: async (req, res) => {
    try {
      const lastWorkout = await Workout.find({});
      return res.status(200).json(lastWorkout);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  // Creates a workout array of different exercises
  createWorkout: async (req, res) => {
    try {
      const newWorkout = await Workout.create(req.body);
      return res.status(200).json(newWorkout);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  // Finds all ranges of each exercise (duration, weight, reps, sets)
  getWorkoutsInRange: async (req, res) => {
    try {
      const rangeWorkout = await Workout.find(req.body);
      return res.status(200).json(rangeWorkout);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  // Finds/Updates an exercise by id and adds the exercise to the workout array
  addExercise: async (req, res) => {
    try {
      const { id } = req.params;
      const newExercise = await Workout.findByIdAndUpdate(id, { $push: { exercises: req.body } });
      return res.status(200).json(newExercise);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};
