"use strict";
{
    function getStringArray() {
        // 这里我们定义了符合 [index: number]: string 结构的索引签名的对象
        return { 1: "a", 2: "b", 3: "c" };
    }
    const myArray = getStringArray();
    // 最终可以通过索引拿到对应的 string 类型的属性
    const secondItem = myArray[2];
    const thirdItem = myArray["3"]; // 索引的类型可以是 number 或 string，如果当前的索引类型支持转换的话
    console.log(secondItem, thirdItem);
    const numberOrStringDict = { length: 22, name: 'Mike', 1: "Hello", "world": "World" };
    console.log(numberOrStringDict['length'], numberOrStringDict.name, numberOrStringDict[1], numberOrStringDict['world']);
    const readonlyStringArray = { 1: "a", 2: "b" };
    // readonlyStringArray[1] = "A" // error
    console.log(readonlyStringArray);
}
