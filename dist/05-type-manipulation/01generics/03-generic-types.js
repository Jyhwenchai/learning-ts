"use strict";
// 除了在函数中使用泛型
function identity(arg) {
    return arg;
}
// 也可以使用泛型定义一个函数属性，它指向一个函数
let myIdentity = identity;
let myIdentityFn = identity;
let myIdentityFn2 = identity;
