var getTotal = function(arr) {
  return arr.reduce(function(pv,cv){
    return pv + cv;
  });
};
