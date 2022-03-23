"use strict";
// 使用一个对象做为函数参数并进行解构
function sum({ a, b, c }) {
    console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9 });
// 对象类型注解支持结构语法
function sum2({ a, b, c }) {
    console.log(a + b + c);
}
function sum3({ a, b, c }) {
    console.log(a + b + c);
}
