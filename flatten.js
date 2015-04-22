var flatten = function(arr) {
  return arr.reduce(function(prevVal, currentVal){
    return prevVal.concat(currentVal);
  });
};
