// 一个函数的参数可以被声明为可选的
function f(n) {
    if (n !== null) {
        console.log(n.toFixed(3));
    }
    else {
        console.log("n value is null.");
    }
}
f(10);
f();
// 可选参数回调
function myForEach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}
myForEach([1, 2, 3], function (a) { return console.log(a); });
myForEach([1, 2, 3], function (a, i) { return console.log(a, i); });
