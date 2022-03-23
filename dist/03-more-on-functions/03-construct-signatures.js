"use strict";
function fn(ctor, desc) {
    return new ctor(desc);
}
// 我们可以这样使用
class TestConstructor {
    constroctor(desc) {
        this.desc = desc;
    }
}
const obj = fn(TestConstructor, "Hello, World");
console.log(obj.desc);
