var average = function(arr) {
  function plus(a,b) {
    return a + b;
  }
  return arr.reduce(plus) / arr.length;
};


// ES6
let average = (arr) => 
  arr.reduce((a,b) => 
    a + b) / arr.length;
