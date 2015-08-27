// ES5
var average = function average(arr) {
  return arr.reduce(function(a,b) {
    return a + b;
  }) / arr.length;
};


// ES6
const average = (arr) => 
  arr.reduce((a,b) => 
    a + b) / arr.length;
