// ES5
var countOccurences = function countOccurences(arr, val) {
  return arr.filter(function(item) {
    return item === val; 
  }).length;
};


// ES6
const countOccurences = (arr, val) =>
  arr.filter((item) => 
    item === val).length;
