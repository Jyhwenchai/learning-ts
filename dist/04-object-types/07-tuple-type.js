"use strict";
// 元组类型
function doSomething(pair) {
    console.log(pair[0], pair[1]);
    return pair;
}
// 可以使用数组对元组进行解构
const [input, age] = doSomething(["hello, world", 42]);
const a = ["hello", 1];
const b = ["beautiful", 2, true];
const c = ["world", 3, true, false, true, false, true];
// 可以在函数中使用可变长参数列表
function readButtonInput(...args) {
    const [name, version, ...input] = args;
    // ...
}
// 上面的函数等价于下面的定义
function readButtonInput2(name, version, ...input) {
    // ...
}
// 可以定义只读元组，就像定义只读数组一样
const readonlyPair = ["hello", 42];
// 我们也可以使用下面的方式使用元组
function distanceFromOrigin([x, y]) {
    return Math.sqrt(x ** 2 + y ** 2);
}
const [x, y] = [10, 10];
