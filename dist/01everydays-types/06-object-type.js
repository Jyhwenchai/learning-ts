"use strict";
{
    // 对象类型
    // 函数参数为对象类型
    // pt: { x: number; y: number}
    function printCoord(pt) {
        console.log("The coordname's x value is " + pt.x);
        console.log("The coordname's y value is " + pt.y);
    }
    printCoord({ x: 3, y: 7 });
    // 可选属性
    function printName(obj) {
        // 对象检查
        // if (obj.last !== undefined) {
        //   console.log(obj.last.toUpperCase());
        // }
        var _a;
        // 更加安全的写法
        console.log(obj.first, (_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
    }
    // 对于可选属性，它不是必填项，所以 printName 允许下面的方式调用
    printName({ first: "Bob" });
    printName({ first: "Alice", last: "Alisson" });
}
