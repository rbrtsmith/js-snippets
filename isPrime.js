// ES5
var isPrime = function isPrime(num) {
  var i = 2;
  if (num < 2) {
    return false;
  }
  for (i; i<num; i+=1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// ES6
const isPrime1 = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i =2; i<num; i+=1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};


