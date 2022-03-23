// 泛型在函数中的使用
function firstElement(arr) {
    return arr[0];
}
var s = firstElement(["a", "b", "c"]);
var n = firstElement([1, 2, 3]);
var u = firstElement([]);
console.log(s, n, u);
