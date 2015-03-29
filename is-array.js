var isArray = function(arg){
    if (Object.prototype.toString.call(arg) === "[object Array]") {
        return true;
    }
    return false;
};
