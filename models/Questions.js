const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema({
  Que: {
    type: String,
    required: true
  },
  Ans: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Questions", QuestionSchema);
