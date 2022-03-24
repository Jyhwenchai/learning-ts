{
    // typeof 操作符
    console.log(typeof "Hello world"); // 输出 string
    // 可以使用 typeof 操作符来关联一个变量或属性的上下文
    var s = "Hello";
    var n = typeof s;
    console.log(n);
    // 注意 ReturnType 不能作用于函数名
    function f() {
        return { x: 10 };
    }
}
