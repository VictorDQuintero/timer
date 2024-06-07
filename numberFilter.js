const numberFilter = function (arr) {
  let newArr = [];
  for (let element of arr) {
    element = Number(element);
    if (!Number.isNaN(element) && element >= 0) {
      newArr.push(element);
    }
  }
  return newArr;
};

module.exports = numberFilter;
