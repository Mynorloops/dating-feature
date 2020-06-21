//To run server on terminal use command: npm run dev
//Server uses Nodemon to automatically restart when js file is saved.

const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");
const questionModel = require("../dating-feature/models/Questions");
const Routes = require("./routes/questionRouter");
const sessions = require("express-session");
//The set-up to the data base
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("mongoose works")
);

//Use this to specify that I'm using EJS
app.set("view engine", "ejs");

//middleware for routing to question-array for testing purpuses

app.use(bodyParser.json());
app.use("/index", Routes); //Route for API
app.use(express.static(__dirname + "/static")); //lets me use static files like images and css

//Home
app.get("/", (req, res) => {
  let randomQuestionId = Math.floor(Math.random() * 3 + 1);

  const questionQuery = questionModel.findOne(
    { id: randomQuestionId },
    "Que",
    function(err, question) {
      if (err) return handleError(err);
      res.render("home", { questionAsked: question });
    }
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
