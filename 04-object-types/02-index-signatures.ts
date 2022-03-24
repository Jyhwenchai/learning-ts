{
/// 索引签名
/// 有时候你不知道一个类型所有的属性的类型，但是你确实知道这些属性大概的样子
/// 那么你可以使用索引签名定义对象的属性

// 下面的示例定义了一个索引签名，它的样子是通过一个 number 类型的索引，然后可以得到一个对应的 string 类型的属性
interface StringArray {
  [index: number]: string;
}

function getStringArray(): StringArray {
  // 这里我们定义了符合 [index: number]: string 结构的索引签名的对象
  return { 1: "a", 2: "b", 3: "c" };
}

const myArray: StringArray = getStringArray();
// 最终可以通过索引拿到对应的 string 类型的属性
const secondItem = myArray[2];
const thirdItem = myArray["3"]; // 索引的类型可以是 number 或 string，如果当前的索引类型支持转换的话
console.log(secondItem, thirdItem);

// 索引签名会迫使对象中的所有属性都必须符合指定的返回类型
interface NumberDictionary {
  [index: string]: number; //指定所有属性的类型必须是 number
  length: number; // 符合指定类型为 number 的属性
  //name: string;// error, 不符合指定的属性类型
}

// 可以使用联合类型解决前面的问题
// 注意这里的索引签名不能是 number 类型，因为不能将 world 转换为 number 类型
interface NumberOrStringDictionary {
  [index: string]: number | string; // 现在指定所有属性的类型可以是 number 或 string
  length: number;
  name: string; // ok
}

const numberOrStringDict: NumberOrStringDictionary = { length: 22, name: 'Mike', 1: "Hello", "world": "World"}
console.log(numberOrStringDict['length'], numberOrStringDict.name, numberOrStringDict[1], numberOrStringDict['world']);

// 最后，可以定义索引签名为只读
interface ReadonlyStringArray {
  readonly [index: number]: string
}

const readonlyStringArray: ReadonlyStringArray = { 1: "a", 2: "b" }
// readonlyStringArray[1] = "A" // error
console.log(readonlyStringArray)

}