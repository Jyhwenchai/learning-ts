{
    /// 可变参数的函数
    // n指出 multiply 至少需要一个参数, m 指出剩下的参数是可变参数，可变参数是一个数组
    function multiply(n) {
        var m = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            m[_i - 1] = arguments[_i];
        }
        return m.map(function (x) { return n * x; });
    }
    var a = multiply(10, 1, 2, 3, 4);
    console.log(a);
    var arr1 = [1, 2, 3];
    var arr2 = [4, 5, 6];
    // 解构参数
    arr1.push.apply(arr1, arr2);
    var args = [8, 5];
    //const angle = Math.atan2(...args);// error 因为 atan2 接受的是一个元组类型而不是数组
    // 我们可以将数组转换为元组
    var args2 = [8, 5];
    var angle = Math.atan2.apply(Math, args2);
    console.log(angle);
    args[0] = 1;
    console.log(args);
}
