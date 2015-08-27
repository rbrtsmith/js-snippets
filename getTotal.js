// ES5
var getTotal = function getTotal(arr) {
  return arr.reduce(function(pv,cv){
    return pv + cv;
  });
};

//ES6
const getTotal = (arr) =>
  arr.reduce((pv, cv) =>
    pv + cv
  );
