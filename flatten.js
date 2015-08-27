// ES5
var flatten = function flatten(arr) {
  return arr.reduce(function(pv, cv){
    return pv.concat(cv);
  });
};


// ES6
const flatten = (arr) =>
  arr.reduce((pv, cv) =>
    pv.concat(cv));
