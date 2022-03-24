"use strict";
{
    // 使用 typeof 进行类型检查
    // TypeScript 期望 typeof 返回一组特定的字符串：
    // "string"
    // "number"
    // "bigint"
    // "boolean"
    // "symbol"
    // "undefined"
    // "object"
    // "function"
    function printAll(strs) {
        if (typeof strs === "object") {
            for (const s of strs)
                [
                    console.log(s)
                ];
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
    printAll("hello, world");
    printAll(["A", "B", "C"]);
    printAll(null);
}
