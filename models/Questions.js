const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema({
  Que: {
    type: String,
    required: true
  },
  Ans: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    require: true
  }
});

module.exports = mongoose.model("Questions", QuestionSchema);

//Que: WHAT DO YOU WANT
//Ans: Because I do
//Id: 4
