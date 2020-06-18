const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //the idea is to link the const = questions array from above to the render underneath.
  res.render("home");
});

//Now

//Previously

router.get("/", (req, res) => {
  res.render("/", {
    questions: [
      {
        id: 1,
        question: "What's your favorite animal?",
        answered: false,
        answer: "//if answered = true answer =user.input"
      },
      {
        id: 2,
        question: "Pizza on pineapple, yes or no?",
        answered: false,
        answer: "//if answered = true answer =user.input"
      },

      {
        id: 3,
        question: "Wood on pineapple, yes or no?",
        answered: false,
        answer: "//if answered = true answer =user.input"
      }
    ]
  });
});

module.exports = router;
