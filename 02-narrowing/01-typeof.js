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
        if (strs === null) {
            console.log('strs is null');
        }
        else if (typeof strs === "object") {
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var s = strs_1[_i];
                [
                    console.log(s)
                ];
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
        else {
            console.log('strs is null');
        }
    }
    printAll("hello, world");
    printAll(["A", "B", "C"]);
    printAll(null);
}
