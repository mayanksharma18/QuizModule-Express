const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quiz = new Schema({
  category: String,
  question: String,
  answers: [String],
  correct: String
});

const Quiz = mongoose.model("Quiz", quiz);

module.exports = Quiz;
