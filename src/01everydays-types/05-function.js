{
    // 函数参数声明
    function greet(name) {
        console.log("Hello, " + name.toUpperCase() + "!!");
    }
    greet("Jane");
    // 返回值类型
    // 通常不需要指明返回值类型，因为当你使用 return 语句时 TypeScript 会自动进行推断
    function getFavoriteNumber() {
        return 26;
    }
    var names = ["Alice", "Bob", "Eve"];
    // 匿名函数
    names.forEach(function (s) {
        console.log(s.toUpperCase());
    });
    // 箭头函数
    names.forEach(function (s) {
        console.log(s.toUpperCase());
    });
    // 简化的箭头函数
    names.forEach(function (s) { return s.toUpperCase(); });
    console.log(names);
}
