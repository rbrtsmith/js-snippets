var countOccurences = function(arr, val) {
  return arr.filter(function(item) {
    return item === val; 
  }).length;
};
