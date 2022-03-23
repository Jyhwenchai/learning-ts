// 数组类型
// 数组中的数据类型必须是相同的
var myArray = ["hello", "world"];
var myArray2 = ["hello", "world"];
var myArray3 = new Array("hello", "world");
// 只读的数组类型
function doStuff(values) {
    // 可以取出元素
    var copy = values.slice();
    console.log("The first value is ".concat(values[0]));
    // 但是不能修改元素
    //values.push("hello!");// error
}
//const rdArr = new ReadonlyArray("red", "green", "blue");//error, 我们不能使用只读数据类型进行创建
var arr = ["red", "green", "blue"];
doStuff(arr);
// 我们可以使用 ReadonlyArray 来使数组只读
var rdArray = ["red", "green", "blue"];
// TypeScript 提供了简短的语法声明数组 `type[]`, 同样也有简单的方式声明只读数组 `readonly type[]`
var rdArray2 = ["red", "green", "blue"];
