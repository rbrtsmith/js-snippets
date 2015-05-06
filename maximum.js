var maximum = function(arr) {
  return arr.sort(function(a,b) {
    return a - b;
  }).pop();
};
