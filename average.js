var average = function(arr) {
  function plus(a,b) {
    return a + b;
  }
  return arr.reduce(plus) / arr.length;
};
