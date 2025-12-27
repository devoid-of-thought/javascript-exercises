const removeFromArray = function(arr,arg1, ...args) {
    const argsArray = [arg1, ...args];
    return arr.filter(item => !argsArray.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
