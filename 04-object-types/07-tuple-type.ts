{

// 元组类型
// 元组类型是另一种 Array 类型，它确切地知道它包含多少个元素，以及它在特定位置包含哪些类型

// 下面定义了一个包含两个字段的元组类型
type StringNumberPair = [string, number];

function doSomething(pair: StringNumberPair) {
  console.log(pair[0], pair[1]);
  return pair;
}

// 可以使用数组对元组进行解构
const [input, age] = doSomething(["hello, world", 42]);
console.log(input, age);


// 我们可以显示的指定元组中的位置是什么类型
interface StringNumberPair2 {
  // length 是一个特殊的属性，它指定了元组的长度
  length: 2
  0: string
  1: number
  content: (string | number)[]

  slice(start?: number, end?: number): Array<string | number>
}

// TODO?
const pair2: StringNumberPair2 = { 
  0: "Hello",
  1: 64, 
  length: 2, 
  content: [1, 2, "A", 4, "B"],
  slice: (start, end): Array<string | number> => { return [] } 
}
console.log(pair2.slice(1, 2));

// 可选类型元组
type Either2dOr3d = [number, number, number?]

// 可选类型元素必须写在最后，并且它会影响元组的长度
function setCoordinate(coord: Either2dOr3d) {
  const [x, y, z] = coord
  console.log(`Provided coordinates had ${coord.length} dimensions`)
}

setCoordinate([1, 2, 3])
setCoordinate([4, 5])

// 元组也可以是可变长度的元组, 可变长元素必须是数组或元组类型
type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

const a: StringNumberBooleans = ["hello", 1];
const b: StringNumberBooleans = ["beautiful", 2, true];
const c: StringNumberBooleans = ["world", 3, true, false, true, false, true];

// 可以在函数中使用可变长参数列表
function readButtonInput(...args: [string, number, ...boolean[]]) {
  const [name, version, ...input] = args;
  console.log(name, version, input);
}

readButtonInput("hello", 64, true, false, true)

// 上面的函数等价于下面的定义
function readButtonInput2(name: string, version: number, ...input: boolean[]) {
  // ...
}

// 可以定义只读元组，就像定义只读数组一样
const readonlyPair: readonly [string, number] = ["hello", 42];
console.log(readonlyPair);

// 我们也可以使用解构的方式使用元组
function distanceFromOrigin([x, y]: [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2);
}

const [x, y]: [number, number] = [10, 10];
console.log(distanceFromOrigin([x, y]))

}