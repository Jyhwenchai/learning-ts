// 使用索引签名定义对象的属性
interface StringArray {
  [index: number]: string;
}

function getStringArray() {
    return { 1: "a", 2: "b", 3: "c" };
}

const myArray: StringArray = getStringArray();
const secondItem = myArray[2];
const thirdItem = myArray["3"]; // 索引的类型可以是 number 或 string，如果当前的索引类型支持转换的话
console.log(secondItem, thirdItem);

// 索引签名会迫使对象中的所有属性都必须符合指定的返回类型
interface NumberDictionary {
  [index: string]: number;//指定所有属性的类型必须是 number
  length: number;
  //name: string;// error, 不符合指定的属性类型
}

// 可以使用组合类型解决前面的问题
interface NumberOrStringDictionary {
  [index: string]: number | string;//指定所有属性的类型必须是 number
  length: number;
  name: string; // ok
}
