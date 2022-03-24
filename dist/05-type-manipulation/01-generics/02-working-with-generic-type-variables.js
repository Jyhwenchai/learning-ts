"use strict";
{
    // 使用泛型变量
    function loggingIdentity(arg) {
        //console.log(arg.length);//error, 并不知道泛型类有length这个属性
        return arg;
    }
    // 当我们知道泛型函数拥有 length 的类型，这样我们才能调用 arg.length 属性
    function loggingIdentitys(args) {
        console.log(args.length);
        return args;
    }
    loggingIdentitys(["red", "green", "blue"]);
}
