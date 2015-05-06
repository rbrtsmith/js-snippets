var minimum = function(arr) {
  return arr.sort(function(a,b) {
    return b - a;
  }).pop();
};
