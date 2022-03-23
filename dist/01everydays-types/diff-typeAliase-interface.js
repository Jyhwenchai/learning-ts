"use strict";
// type-aliase 和 interafce 的区别在于 type-aliase 不能新增属性而 interface 可以扩展
function getBear(bear) {
    return bear;
}
const bear = getBear({ name: "Bear", honey: true });
console.log(bear.name);
console.log(bear.honey);
const bear2 = getBear({ name: "Bear", honey: true });
console.log(bear.name);
console.log(bear.honey);
function getWindow(window) {
    return window;
}
const wd = getWindow({ title: "Test", desc: "It's a test" });
