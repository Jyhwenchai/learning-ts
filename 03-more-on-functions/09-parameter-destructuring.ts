{
// 使用一个对象做为函数参数并进行解构
function sum({ a, b, c }) {
  console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9});

// 对象类型注解支持结构语法
function sum2({ a, b, c }: {a: number; b: number; c: number}) {
  console.log(a + b + c);
}

// 当然你也可以使用别名来声明一个对象
type ABC = {a: number; b: number; c: number};
function sum3({a, b,c}: ABC) {
  console.log(a + b + c);
}

}