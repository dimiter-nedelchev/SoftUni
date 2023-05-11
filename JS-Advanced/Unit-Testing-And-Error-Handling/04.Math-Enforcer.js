let mathEnforcer = {

    addFive: function (num) {
    if (typeof(num) !== 'number') {
    return undefined;
    } 
    return num + 5; },

    subtractTen: function (num) { 
        if (typeof(num) !== 'number') { return undefined; } 
        return num - 10; },

    sum: function (num1, num2) { 
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') { 
            return undefined; } 
            console.log(num1 + num2)
            return num1 + num2; } };
mathEnforcer.sum(-1, -1)
module.exports= mathEnforcer;