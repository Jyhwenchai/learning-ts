{
    // 可以使用 number  对数组获取数组元素的类型
    var MyArray = [
        { name: "Alice", age: 15 },
        { name: "Bob", age: 23 },
        { name: "Eve", age: 38 },
    ];
    var MyArray2 = [
        { name: "Alice", age: 15 },
        { name: "Bob", age: 23 },
        { addr: "Eve", number: 38 },
    ];
    // type myArray2 = {
    //    name: string;
    //    age: number;
    //    addr?: undefined;
    //    number?: undefined;
    // } | {
    //    addr: string;
    //    number: number;
    //    name?: undefined;
    //    age?: undefined;
    // }
}
