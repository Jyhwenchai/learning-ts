"use strict";
// 类成员
// 1. 成员属性
class Point {
}
const pt = new Point();
pt.x = 0;
pt.y = 0;
// 类型注解是可选的，如果没有指定则是 any 类型
class Point2 {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
const pt2 = new Point2();
console.log(`${pt2.x}, ${pt2.y}`, typeof pt2.x);
// --strictPropertyInitialization 设置类字段是否需要在构造器中被初始化，默认为 true
class GoodGreeter {
    constructor() {
        this.name = "hello";
    }
}
// 如果您打算通过构造函数以外的方式明确地初始化一个字段（例如，可能一个外部库正在为您填充您的类的一部分），您可以使用明确的赋值断言运算符，！
class OKGreeter {
}
// 2. 只读成员属性, 只能在定义时和在构造器中初始化完成
class Greeter {
    constructor(otherName) {
        this.name = "world";
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
    err() {
        //this.name = "not ok";//error
    }
}
const g = new Greeter();
//g.name = "also not ok";	// error
