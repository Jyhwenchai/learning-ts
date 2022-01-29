// 除了在函数中使用泛型
function identity<Type>(arg: Type): Type {
  return arg;
}

// 也可以使用泛型定义一个函数属性，它指向一个函数
let myIdentity: <Type>(arg: Type) => Type = identity;


// 在 interface 中使用泛型
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

let myIdentityFn: GenericIdentityFn = identity;

// 进一步，我们可以提示泛型的作用域到 interface 中而不是函数, 这样可以达到与之前的例子同样的目的
interface GenericIdentityFn2<Type> {
  (arg: Type): Type;
}
let myIdentityFn2: GenericIdentityFn2<number> = identity;
