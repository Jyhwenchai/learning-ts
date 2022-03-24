"use strict";
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
                for (const s of strs)
                    [
                        console.log(s)
                    ];
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
        else
            [
                console.log("strs is null")
            ];
    }
    printAll("hello, world");
    printAll(["A", "B", "C"]);
    printAll(null);
}
