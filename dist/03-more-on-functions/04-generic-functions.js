"use strict";
{
    /// 泛型函数
    function firstElement(arr) {
        return arr[0];
    }
    const s = firstElement(["a", "b", "c"]);
    const n = firstElement([1, 2, 3]);
    const u = firstElement([]);
    console.log(s, n, u);
}
