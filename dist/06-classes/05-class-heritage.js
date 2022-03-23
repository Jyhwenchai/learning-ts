"use strict";
class Sonar {
    ping() {
        console.log("ping!");
    }
}
class C {
    constructor() {
        this.x = 0;
    }
}
const c = new C();
//c.y = 10;	// error
// 3.extends 子句
// 类可以扩展子其它类型
class Animal {
    move() {
        console.log("moving along!");
    }
}
class Dog extends Animal {
    woof(times) {
        for (let i = 0; i < times; i++) {
            console.log("woof!");
        }
    }
}
const d = new Dog();
d.move();
d.woof(3);
// 4.成员方法覆盖
class Base {
    greet() {
        console.log("Hello, world");
    }
}
class Derived extends Base {
    greet(name) {
        if (name === undefined) {
            super.greet();
        }
        else {
            console.log(`Hello, ${name.toUpperCase()}`);
        }
    }
}
const dd = new Derived();
dd.greet();
dd.greet("reader");
// 使用基类关联派生类的引用
const b = dd;
b.greet();
class AnimalHouse {
    constructor(animal) {
        this.resident = animal;
    }
}
class DogHouse extends AnimalHouse {
    constructor(dog) {
        super(dog);
    }
}
// 6.初始化顺序
class Base2 {
    constructor() {
        this.name = "base";
        console.log("my name is " + this.name);
    }
}
class Derived2 extends Base2 {
    constructor() {
        super(...arguments);
        this.name = "derived";
    }
}
// 1. 首先初始化基类的成员属性
// 2. 运行基类的构造器
// 3. 初始化派生类的成员属性
// 4. 运行派生类的构造器
const ddd = new Derived2();
// 注意：
class MsgError extends Error {
    constructor(m) {
        super(m);
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, MsgError.prototype);
    }
    sayHello() {
        return "hello " + this.message;
    }
}
const err = new MsgError("TypeScript");
err.sayHello();
