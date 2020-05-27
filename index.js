//To run server on terminal use command: npm run dev
//Server uses Nodemon to automatically restart when js file is saved.

const express = require("express");
const path = require("path");

const app = express();

//Allows for different routes when written on the url. Example: localhost:3000/text.html
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.get("/:userQuery", (req, res) => {
  res.render("index", { data: { userQuery: req.params.userQuery } });
});
//Establishes the needed port, in this case 3000
const PORT = process.env.PORT || 3000;

//Telles node when server has started
app.listen(PORT, () => console.log("Server started on port ${PORT}"));
