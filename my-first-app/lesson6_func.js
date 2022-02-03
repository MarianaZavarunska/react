"use strict";
exports.__esModule = true;
var user = { name: 'Max', age: 18, gender: 'male' };
function sum(a, b) {
    return a + b;
}
function showSum(a, b) {
    console.log(a + b);
}
function incAge(someUser, inc) {
    someUser.age += inc;
    return someUser;
}
console.log("Sum".concat(sum(1, 2)));
showSum(2, 3);
incAge(user, 2);
console.log(user);
