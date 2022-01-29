// 元组类型

// 下面定义了一个包含两个字段的元组类型
type StringNumberPair = [string, number];

function doSomething(pair: StringNumberPair) {
  console.log(pair[0], pair[1]);
  return pair;
}

// 可以使用数组对元组进行解构
const [input, age] = doSomething(["hello, world", 42]);

// 我们可以显示的指定元组中的位置是什么类型
interface StringNumberPair2 {
  length: 2;
  0: string;
  1: number;

  slice(start?: number, end?: number): Array<string | number>;
}

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
  // ...
}

// 上面的函数等价于下面的定义
function readButtonInput2(name: string, version: number, ...input: boolean[]) {
  // ...
}

// 可以定义只读元组，就像定义只读数组一样
const readonlyPair: readonly [string, number] = ["hello", 42];


// 我们也可以使用下面的方式使用元组
function distanceFromOrigin([x, y]: [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2);
}

const [x, y]: [number, number] = [10, 10];

