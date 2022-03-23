"use strict";
// 自动推断字面量的类型为 number，赋值给 counter
const obj = { counter: 0 };
var flag = true;
if (flag) {
    obj.counter = 1;
}
const req = { url: "https//example.com", method: "GET" };
function handleRequest(url, method) {
}
// handleRequest(req.url, req.method); // 这里无法编译通过，因为 req.method 会被视为 string 类型，而 handleRequest 中 method 的类型是字面量的组合类型，这导致两者类型不匹配。
// 可以使用以下方式解决这个问题
// 1. 使用类型断言，说明其是 "GET" 字面量
const req2 = { url: "https//example.com", method: "GET" };
handleRequest(req2.url, req2.method);
// 2. 可以使用  as const 将整个对象转换为类型字面量
const req3 = { url: "https//example.com", method: "GET" };
handleRequest(req3.url, req3.method);
