"use strict";
// 通用类型
let x = {
    contents: "hello world"
};
// 检查 contents 类型 
if (typeof x.contents === "string") {
    console.log(x.contents.toLowerCase());
}
// 或者使用类型断言
console.log(x.contents.toLowerCase());
let st = { contents: "hello, world" };
console.log(st);
