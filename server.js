//To run server on terminal use command: npm run dev
//Server uses Nodemon to automatically restart when js file is saved.

const express = require("express");
//const path = require("path");
const questions = require("./questions").default;

const app = express();

//gets the questions as a json array
app.get("/api/questions", (req, res) => res.json(questions));

//static folder
//If you used an HTML based static server, the next line should be enabled.
//app.use(express.static(path.join(__dirname, "public")));

//The rest id for an EJS templating server.
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  //the idea is to link the const = questions array from above to the render underneath.
  res.render("home");
});

app.set("view engine", "ejs");
app.get("/index", (req, res) => {
  res.render("pages/index", {
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

app.set("view engine", "ejs");
app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.set("view engine", "ejs");
app.get("/answer", (req, res) => {
  res.render("pages/answer");
});

app.set("view engine", "ejs");
app.get("/contact", (req, res) => {
  res.render("pages/contact");
});

app.set("view engine", "ejs");
app.get("/question", (req, res) => {
  res.render("pages/question");
});

//Establishes the needed port, in this case 3000
const PORT = process.env.PORT || 3000;

//Telles node when server has started
app.listen(PORT, () => console.log("Server started on port 3000"));

//source: https://www.youtube.com/watch?v=L72fhGm1tfE&t=1614s
