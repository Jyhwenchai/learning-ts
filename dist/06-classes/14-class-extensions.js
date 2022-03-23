"use strict";
// 类扩展
const someClass = class {
    constructor(value) {
        this.content = value;
    }
};
const m = new someClass("Hello, world"); // m: someClass<string>
