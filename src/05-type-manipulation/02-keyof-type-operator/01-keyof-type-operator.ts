{
// keyof 操作符

// `keyof` 操作符可以得到一个对象的所有属性的名称(就是key)的联合类型(key 的类型可能是 string 或 number)，例如：
type Point = { x: number; y: number };
type P = keyof Point;// 这里得到的的 P 是 "x" | "y" 的联合类型

// 如果一个对象中的属性有类型为 string 或 number 的索引签名，那么 keyof 得到的将会是这两种类型
type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;// A 的类型是 number 而不是 unknown

type Mapish = { [k: string]: boolean };
type M = keyof Mapish; // M 的类型是 string | number

// 查看 M 的类型，会发现是 stirng | number 类型，而不是 string，这是因为在 JavaScript 中 obj[0] 总是等价于 obj["0"]

}