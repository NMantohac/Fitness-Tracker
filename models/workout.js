const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: [{
    type: {
      type: String,
      trim: true,
      required: 'Enter an exercise type',
    },
    name: {
      type: String,
      trim: true,
      required: 'Enter an exercise name',
    },
    duration: {
      type: Number,
      required: 'Enter an exercise duration in minutes',
    },
    weight: {
      type: Number,
    },
    reps: {
      type: Number,
    },
    sets: {
      type: Number,
    },
    distance: {
      type: Number,
    },
  }],
},
{
  toJSON: {
    // requested data provides virtual properties
    virtuals: true,
  },
});

workoutSchema.virtual('totalDuration').get(function () {
  // total duration time for exercises array
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = model('Workout', workoutSchema);

module.exports = Workout;
