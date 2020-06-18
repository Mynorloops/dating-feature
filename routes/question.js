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

//Specific question
router.get("/:postId", async (req, res) => {
  const specQuestion = await Questions.findById(req.params.postId);
  res.json(specQuestion);
});

//exports the module router to the main server.js
module.exports = router;
