{
// 字面量类型(常量类型)

// 字面量是不可修改的，我们可以使用 const 来定义一个字面量
const str = "Hello";

// 或者像下面的写法，但通常不会这么使用
let x: "hello" = "hello";

x = "hello";  // 允许与之前定义的值相同
//x = "world";    // error

// 通常我们可以将字面量绑定到联合值中，这非常有用。
function printText(s: string, alignment: "left" | "right" | "center") {
  console.log("string " + s + " alignment " + alignment);
}

printText("Hello, world", "left");
printText("Hello, world", "center");

// 也可以在返回值中使用
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

// 也可以绑定非字面量类型与字面量类型混合使用
interface Options {
  width: number;
}

function configure(x: Options | "auto") {
  console.log(x)
}

configure({ width: 100 });
configure("auto");

}