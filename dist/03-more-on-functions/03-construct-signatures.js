"use strict";
{
    /// javascript 函数也可以用 new 操作符调用，对应的 typescript 将它们称为 constructors (构造函数)，因为它们通常会创建一个新对象。
    /// 你可以在一个 call signature 前面添加一个 new 关键字来表示一个 construct signature (构造函数签名)
    class SomeObject {
        constructor(desc) {
            this.desc = desc;
        }
    }
    function fn(ctor, desc) {
        // 返回一个符合 SomeContructor 构造函数签名的对象
        return new ctor(desc);
    }
    const obj = fn(SomeObject, "Hello, World");
    console.log(obj.desc);
}
