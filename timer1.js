// FUNCTION IMPLEMENTATION

/* 
"Implement an alarm clock / timer which will beep after a specified amount of time has passed. 
The user can specify an unlimited number of alarms using command line arguments"
*/

// Function returns a shallow copy of the process.argv array ( returns only the user provided arguments).
const userInput = function () {
  return process.argv.slice(2);
};

// Function takes an array and after turning its elements into numbers it returns an array with only positive numbers
const numberFilter = function (arr) {
  let newArr = [];
  for (let element of arr) {
    element = Number(element); // turns every element into a number data type
    if (!Number.isNaN(element) && element >= 0) {
      // only numbers that are positive and not NaN will be pushed into new array
      newArr.push(element);
    }
  }
  return newArr;
};

// Function takes array of positive numbers/seconds, turns them into milliseconds and sets an alarm that will beep/make a sound after the specified number of ms has passed
const timer = function (arr) {
  for (let seconds of arr) {
    console.log(seconds);
    seconds *= 1000;
    setTimeout(() => {
      process.stdout.write("\x07");
    }, seconds);
  }
};

// DRIVER CODE

const userArr = userInput();
timer(numberFilter(userArr));
