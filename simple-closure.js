var add = function(num){
    var count = 0,
    addInner = function (){
        return count += num;
    };
    return addInner;
};

var addone = add(1);
var addTwo = add(2);
console.log(addone()); // 1
console.log(addTwo()); // 2
console.log(addone()); // 2
console.log(addTwo()); // 4
console.log(addone()); // 3
console.log(addTwo()); // 6
console.log(addone()); // 4
console.log(addTwo()); // 8