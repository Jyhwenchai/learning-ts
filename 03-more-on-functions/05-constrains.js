{
    // 对泛型的约束，这里约束 Type 是一个对象类型
    function longest(a, b) {
        if (a.length >= b.length) {
            return a;
        }
        else {
            return b;
        }
    }
    var longerArray = longest([1, 2], [1, 2, 3]);
    var longerString = longest("alice", "bob");
    function combine(arr1, arr2) {
        return arr1.concat(arr2);
    }
    // 可以使用联合类型作为泛型的类型
    var arr = combine([1, 2, 3], ["hello"]);
    console.log(arr);
    // 函数做为泛型类型
    function filter(arr, func) {
        return arr.filter(func);
    }
    var result = filter([1, 2, 3, 4, 5], function (number) { return number > 3; });
    console.log(result);
}
