const express = require("express");
const router = express.Router();

const Questions = require("../models/Questions");

// turning the res.render into console.log GETs object in terminal Gets back all questions
router.get("/", async (req, res) => {
  try {
    const posts = await Questions.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("add", function(req, res, next) {
  res.render("home");
});

// POSTs json info to the database
router.post("/", async (req, res) => {
  const post = new Questions({
    Que: req.body.Que,
    Ans: req.body.Ans
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/add", function(req, res, next) {
  console.log(req.body);
  const mybodydata = {
    Ans: req.body.Ans
  };

  let data = questionModel(mybodydata);

  data.save(function(err) {
    if (err) {
      res.render("home", { message: "No submission" });
    } else {
      res.render("home", { message: "you submitted your answer" });
    }
  });
});

//Specific question
router.get("/:postId", async (req, res) => {
  const specQuestion = await Questions.findById(req.params.postId);
  res.json(specQuestion);
});

//exports the module router to the main server.js
module.exports = router;
