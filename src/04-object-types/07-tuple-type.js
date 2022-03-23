// 元组类型
function doSomething(pair) {
    console.log(pair[0], pair[1]);
    return pair;
}
// 可以使用数组对元组进行解构
var _a = doSomething(["hello, world", 42]), input = _a[0], age = _a[1];
var a = ["hello", 1];
var b = ["beautiful", 2, true];
var c = ["world", 3, true, false, true, false, true];
// 可以在函数中使用可变长参数列表
function readButtonInput() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var name = args[0], version = args[1], input = args.slice(2);
    // ...
}
// 上面的函数等价于下面的定义
function readButtonInput2(name, version) {
    var input = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        input[_i - 2] = arguments[_i];
    }
    // ...
}
// 可以定义只读元组，就像定义只读数组一样
var readonlyPair = ["hello", 42];
// 我们也可以使用下面的方式使用元组
function distanceFromOrigin(_a) {
    var x = _a[0], y = _a[1];
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
var _b = [10, 10], x = _b[0], y = _b[1];
