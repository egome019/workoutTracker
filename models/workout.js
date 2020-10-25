const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    // code goes here...
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;