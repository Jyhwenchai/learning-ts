"use strict";
// 对泛型的约束，这里约束 Type 必须是一个对象
function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
const longerArray = longest([1, 2], [1, 2, 3]);
const longerString = longest("alice", "bob");
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
// 可以使用组合类型作为泛型的类型
const arr = combine([1, 2, 3], ["hello"]);
console.log(arr);
// 函数做为泛型类型
function filter(arr, func) {
    return arr.filter(func);
}
