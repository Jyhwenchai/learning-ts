"use strict";
// 箭头函数
// 如果您有一个经常以丢失其 this 上下文的方式调用的函数，则使用箭头函数属性而不是方法定义是有意义的：
class MyClass {
    constructor() {
        this.name = "MyClass";
        this.getName = () => {
            return this.name;
        };
    }
}
const c = new MyClass();
const g = c.getName;
// Prints "MyClass" instead of crashing
console.log(g());
// 这有一些权衡
// 1. this 值保证在运行时是正确的，即使对于未使用 TypeScript 检查的代码也是如此
// 2. 这将使用更多内存，因为每个类实例都会有自己的每个以这种方式定义的函数的副本
// 3. 您不能在派生类中使用 super.getName，因为原型链中没有条目可以从中获取基类方法
// # this 参数
// 在方法或函数定义中，名为 this 的初始参数在 TypeScript 中具有特殊含义。这些参数在编译期间被擦除
class SomeType {
}
function fn(x) {
}
// JavaScript 解析为 
//function fn(x) {}
// 如果你有一个派生类，它的 sameAs 方法现在将只接受同一个派生类的其他实例：
class Box {
    constructor() {
        this.content = "";
    }
    sameAs(other) {
        return other.content === this.content;
    }
}
class DerivedBox extends Box {
    constructor() {
        super(...arguments);
        this.otherContent = "?";
    }
}
const base = new Box();
const derived = new DerivedBox();
//derived.sameAs(base);//error
