// ES5
var containsArr = function(arr) {
  return arr.some(function(val) {
    if (typeof val === 'object') {
      return true;
    }
  });
};

var flatten = function(arr){
  var result = [];
  result = arr.reduce(function(pv, cv){
    return pv.concat(cv);
  },[]);
  if (containsArr(result)) {
    return flatten(result);
  }
  return result;
};



//ES6
const containsArr = arr => {
  return arr.some(val => {
    if (typeof val === 'object') {
      return true;
    }
  });
};

const flatten = arr => {
  let result = [];
  result = arr.reduce((pv, cv) => {
    return pv.concat(cv);
  },[]);
  if (containsArr(result)) {
    return flatten(result);
  }
  return result;
};
