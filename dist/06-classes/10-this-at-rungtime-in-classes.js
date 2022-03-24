"use strict";
{
    // 在类中的动态运行时 this
    // TypeScript 不会改变 JavaScript 的运行时行为
    class MyClass {
        constructor() {
            this.name = "MyClass";
        }
        getName() {
            return this.name;
        }
    }
    const c = new MyClass();
    const obj = {
        name: "obj",
        getName: c.getName, // 此时 c.getName 中的 this 指向 obj 对象，所以 this.name 是 obj 对象中的 name
    };
    // Prints "obj", not "MyClass"
    console.log(obj.getName());
}
