"use strict";
// 在大多数情况下，TypeScript 中的类在结构上进行比较，与其他类型相同。
class Point1 {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
class Point2 {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
const p = new Point2();
class Person {
}
class Employee {
}
const pp = new Employee();
class Empty {
}
function fn(x) { }
fn(window);
fn({});
fn(fn);
