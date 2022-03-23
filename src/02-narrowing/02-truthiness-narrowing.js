{
    // 使用真实性检查类型
    // 以下的值在真实性检查中都为false
    // 0
    //  NaN
    // ""
    // 0n (bigint)
    // null
    // undefined
    function printAll(strs) {
        if (strs) {
            if (typeof strs === "object") {
                for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                    var s = strs_1[_i];
                    [
                        console.log(s)
                    ];
                }
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
        else
            [
                console.log("str is null")
            ];
    }
    printAll("hello, world");
    printAll(["A", "B", "C"]);
    printAll(null);
}
