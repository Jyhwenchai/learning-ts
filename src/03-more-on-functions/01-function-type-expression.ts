// 可以将函数类型表达式作为一个函数的参数类型
function greeter(fn: (a: string) => void) {
  fn("hello, world");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);

// 也可以使用类型别名来表示一个函数类型
type GreetFunction = (a: string) => void;
function greeter2(fn: GreetFunction) {
  fn("hello, world");
}

greeter2(printToConsole);
