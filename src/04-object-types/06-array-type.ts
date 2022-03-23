// 数组类型
// 数组中的数据类型必须是相同的

let myArray: string[] = ["hello", "world"];

let myArray2: Array<string> = ["hello", "world"];

let myArray3 = new Array("hello", "world");

// 只读的数组类型
function doStuff(values: ReadonlyArray<string>) {
  // 可以取出元素
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);

  // 但是不能修改元素
  //values.push("hello!");// error
}

//const rdArr = new ReadonlyArray("red", "green", "blue");//error, 我们不能使用只读数据类型进行创建
const arr = ["red", "green", "blue"];
doStuff(arr);

// 我们可以使用 ReadonlyArray 来使数组只读
const rdArray: ReadonlyArray<string> = ["red", "green", "blue"];

// TypeScript 提供了简短的语法声明数组 `type[]`, 同样也有简单的方式声明只读数组 `readonly type[]`
const rdArray2: readonly string[] = ["red", "green", "blue"];

