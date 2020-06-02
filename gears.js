const profiles = require("./profiles");

const questionBlock = document.querySelector(".question-block");
const add = document.querySelector("#date-sim");

add.addEventListener("click", () => {
  questionBlock.classList.add("question-block-active");
});
