{
    // 使用相等性检查收窄类型
    // 支持 ===、!==、==、!=
    function example(x, y) {
        if (x === y) {
            console.log(x.toUpperCase(), y.toUpperCase());
        }
        else {
            console.log(x, y);
        }
    }
    example("Hello", "World");
    example("A", true);
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
    }
    printAll("hello, world");
    printAll(["A", "B", "C"]);
    printAll(null);
}
