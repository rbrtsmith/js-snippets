//ES5
var merge = function merge() {
  var args = [].slice.call(arguments);
  return args.reduce(function(target, obj){
    Object.keys(obj).forEach(function(key) {
      target[key] = obj[key];
    });
    return target;
  },{});
};


//ES6
const merge = (...args) => {
  return args.reduce((target, obj) => {
    Object.keys(obj).forEach(key => {
      target[key] = obj[key];
    });
    return target;
  }, {});
};
