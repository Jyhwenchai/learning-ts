// 定义一个泛型方法
function identity<Type>(arg: Type): Type {
  return arg
}

// 显示指定 Type 的真正类型
let output = identity<string>("myString");

