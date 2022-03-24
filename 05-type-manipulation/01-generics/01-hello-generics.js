{
    // 定义一个泛型方法
    function identity(arg) {
        return arg;
    }
    // 显示指定 Type 的真正类型
    var output = identity("myString");
    console.log(output);
}
