{
    function doSomething(pair) {
        console.log(pair[0], pair[1]);
        return pair;
    }
    // 可以使用数组对元组进行解构
    var _a = doSomething(["hello, world", 42]), input = _a[0], age = _a[1];
    console.log(input, age);
    // TODO?
    var pair2 = {
        0: "Hello",
        1: 64,
        length: 2,
        content: [1, 2, "A", 4, "B"],
        slice: function (start, end) { return []; }
    };
    console.log(pair2.slice(1, 2));
    // 可选类型元素必须写在最后，并且它会影响元组的长度
    function setCoordinate(coord) {
        var x = coord[0], y = coord[1], z = coord[2];
        console.log("Provided coordinates had ".concat(coord.length, " dimensions"));
    }
    setCoordinate([1, 2, 3]);
    setCoordinate([4, 5]);
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
        console.log(name, version, input);
    }
    readButtonInput("hello", 64, true, false, true);
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
    console.log(readonlyPair);
    // 我们也可以使用解构的方式使用元组
    function distanceFromOrigin(_a) {
        var x = _a[0], y = _a[1];
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    }
    var _b = [10, 10], x = _b[0], y = _b[1];
    console.log(distanceFromOrigin([x, y]));
}
