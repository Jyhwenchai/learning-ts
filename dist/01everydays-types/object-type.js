"use strict";
// 函数参数为对象类型
function printCoord(pt) {
    console.log("The coordname's x value is " + pt.x);
    console.log("The coordname's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
// 可选属性
function printName(obj) {
    var _a;
    // 对象检查
    if (obj.last !== undefined) {
        console.log(obj.last.toUpperCase());
    }
    // 更加安全的写法
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
