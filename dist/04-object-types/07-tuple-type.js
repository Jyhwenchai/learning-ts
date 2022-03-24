"use strict";
{
    function doSomething(pair) {
        console.log(pair[0], pair[1]);
        return pair;
    }
    // 可以使用数组对元组进行解构
    const [input, age] = doSomething(["hello, world", 42]);
    console.log(input, age);
    // TODO?
    const pair2 = {
        0: "Hello",
        1: 64,
        length: 2,
        content: [1, 2, "A", 4, "B"],
        slice: (start, end) => { return []; }
    };
    console.log(pair2.slice(1, 2));
    // 可选类型元素必须写在最后，并且它会影响元组的长度
    function setCoordinate(coord) {
        const [x, y, z] = coord;
        console.log(`Provided coordinates had ${coord.length} dimensions`);
    }
    setCoordinate([1, 2, 3]);
    setCoordinate([4, 5]);
    const a = ["hello", 1];
    const b = ["beautiful", 2, true];
    const c = ["world", 3, true, false, true, false, true];
    // 可以在函数中使用可变长参数列表
    function readButtonInput(...args) {
        const [name, version, ...input] = args;
        console.log(name, version, input);
    }
    readButtonInput("hello", 64, true, false, true);
    // 上面的函数等价于下面的定义
    function readButtonInput2(name, version, ...input) {
        // ...
    }
    // 可以定义只读元组，就像定义只读数组一样
    const readonlyPair = ["hello", 42];
    console.log(readonlyPair);
    // 我们也可以使用解构的方式使用元组
    function distanceFromOrigin([x, y]) {
        return Math.sqrt(x ** 2 + y ** 2);
    }
    const [x, y] = [10, 10];
    console.log(distanceFromOrigin([x, y]));
}
