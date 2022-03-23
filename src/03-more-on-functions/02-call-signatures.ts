{

// 在一个函数表达式中我们无法定义一个函数有额外的属性，但是我们可以采用在一个对象类型中编写一个 call signature 来实现这一目的
type DescribableFunction = {
  description: string;
  (someArg: number): boolean // 注意这里方法的定义与箭头函数有些不同, 并不使用 =>
};

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

const df: DescribableFunction = (num) => num > 0;

df.description = "this is function description.";

doSomething(df)


}