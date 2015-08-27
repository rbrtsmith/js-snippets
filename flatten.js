// ES5
var flatten = function(arr) {
  return arr.reduce(function(prevVal, currentVal){
    return prevVal.concat(currentVal);
  });
};


// ES6
const flatten = (arr) =>
  arr.reduce((prevVal, currVal) =>
    prevVal.concat(currVal));
