const userInput = require("./userInput");
const numberCheck = require("./numberFilter");

// Function creates a sound after
const timer = function (arr) {
  for (let seconds of arr) {
    console.log(seconds);
    seconds *= 1000;
    setTimeout(() => {
      process.stdout.write("\x07");
    }, seconds);
  }
};

module.exports = timer;

// Test Code

const userArr = userInput();
timer(numberCheck(userArr));
