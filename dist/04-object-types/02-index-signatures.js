"use strict";
function getStringArray() {
    return { 1: "a", 2: "b", 3: "c" };
}
const myArray = getStringArray();
const secondItem = myArray[2];
const thirdItem = myArray["3"]; // 索引的类型可以是 number 或 string，如果当前的索引类型支持转换的话
console.log(secondItem, thirdItem);
