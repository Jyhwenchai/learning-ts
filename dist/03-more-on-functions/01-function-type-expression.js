"use strict";
{
    // 可以将函数类型表达式作为一个函数的参数类型
    function greeter(fn) {
        fn("hello, world");
    }
    function printToConsole(s) {
        console.log(s);
    }
    greeter(printToConsole);
    function greeter2(fn) {
        fn("hello, world");
    }
    greeter2(printToConsole);
}
