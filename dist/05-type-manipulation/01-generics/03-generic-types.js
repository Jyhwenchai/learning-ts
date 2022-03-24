"use strict";
{
    function identity(arg) {
        return arg;
    }
    // 定义一个泛型函数属性，它指向一个泛型函数
    let myIdentity = identity;
    console.log(myIdentity("Hello, World"));
    // 我们还可以将泛型类型写为对象字面量类型的调用签名
    let myIdentity2 = identity;
    console.log(myIdentity2(64));
    let myIdentityFn = identity;
    console.log(myIdentityFn(64));
    let myIdentityFn2 = identity;
    console.log(myIdentityFn2(64));
}
