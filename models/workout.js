const mongoose = require("mongoose");

const { Schema } = mongoose;

const WorkoutSchema = new Schema({});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
