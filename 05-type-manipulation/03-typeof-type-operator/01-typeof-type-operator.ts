// typeof 操作符
console.log(typeof "Hello world");// 输出 string

// 可以使用 typeof 操作符来关联一个变量或属性的上下文
let s = "Hello";
let n = typeof s;
console.log(n);

// typeof 与结合一些其他的操作符很有用
type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;// 获取返回值类型, K 为 boolean

// 注意 ReturnType 不能作用于函数名
function f() {  
  return { x: 10 };
}

// type P = ReturnType<f>;//error

// 注意区分值与类型，如果要要知道函数 f 的值是什么类型，因该用 typeof
type P = ReturnType<typeof f>;// P 为 {x: number;}
