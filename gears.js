const profiles = require("./profiles");

var questionBlock = document.querySelector(".question-block");
var dateSim = document.querySelector("#date-sim");

function show() {
  console.log("expand");
  questionBlock.classList.toggle(".question-block-active");
}

dateSim.addEventListener("click", show);
