const timer = function (arr) {
  for (let seconds of arr) {
    if (seconds < 0) {
      continue;
    }
    console.log(seconds);
    seconds *= 1000;
    setTimeout(() => {
      process.stdout.write("\x07");
    }, seconds);
  }
};

const numberCheck = function (arr) {
  let newArr = [];
  for (let element of arr) {
    element = Number(element);
    if (!Number.isNaN(element)) {
      newArr.push(element);
    }
  }
  return newArr;
};

// Test Code

const userArr = process.argv.slice(2);
timer(numberCheck(userArr));
