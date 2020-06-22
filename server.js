//To run server on terminal use command: npm run dev
//Server uses Nodemon to automatically restart when js file is saved.

const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");
const questionModel = require("../dating-feature/models/Questions");
// const Routes = require("./routes/questionRouter");
const sessions = require("express-session");
//The set-up to the data base
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("mongoose works")
);

//Use this to specify that I'm using EJS
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  let randomQuestionId = Math.floor(Math.random() * 3 + 1);

  const questionQuery = questionModel.findOne(
    { id: randomQuestionId },

    function(err, question) {
      if (err) return handleError(err);
      res.render("home", { questionAsked: question });
    }
  );
});

// app.post("/", (req, res) => {
//   var inputAnswer = new questionModel({
//     Answer: req.body.Ans
//   });
//   post.save(function(err, post) {
//     if (err) {
//       return next(err);
//     }
//     res.json(201, inputAnswer);
//   });
// });

// app.post("/", function(req, res) {
//   let answer = req.body.answer;
//   const savedPost = answer.save();
//   res.json(savedPost);
// });

app.post("/insert", function(req, res) {
  console.log(req.body.answer, req.body._id);
  questionModel.findByIdAndUpdate(
    { _id: req.body._id },
    { Ans: req.body.answer },
    function(err, question) {
      if (err) return handleError(err);
      res.render("home", { questionAsked: question });
    }
  );
});

//Home with variables

// POSTs json info to the database
// app.post("/", async (req, res) => {
//   const post = new Questions({
//     Que: req.body.Que,
//     Ans: req.body.Ans
//   });
//   try {
//     const savedPost = await post.save();
//     res.json(savedPost);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

//delete
app.delete("/:questionsId", (req, res) => {
  console.log(req.body);
  const deletequestion = Questions.remove({ _id: req.body.postId });
});

//update
app.patch("/:questionsId", (req, res) => {
  const updateAnswer = Questions.remove(
    { _id: req.params.postId },
    { $set: { Ans: req.body.Ans } }
  );
});

//how to get data from post

//Index route
// app.get("/index", (req, res) => {
//   //the idea is to link the const = questions array from above to the render underneath.
//   res.render("pages/index", { message: message });
// });

//Establishes the needed port, in this case 3000
const PORT = process.env.PORT || 3000;

//Tells node when server has started
app.listen(PORT, () => console.log("Server started on port 3000"));

//source: https://www.youtube.com/watch?v=L72fhGm1tfE&t=1614s
