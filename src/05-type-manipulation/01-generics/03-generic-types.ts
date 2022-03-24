{

function identity<Type>(arg: Type): Type {
  return arg;
}

// 定义一个泛型函数属性，它指向一个泛型函数
let myIdentity: <Type>(arg: Type) => Type = identity;

console.log(myIdentity("Hello, World"))

// 我们还可以将泛型类型写为对象字面量类型的调用签名
let myIdentity2: { <Type>(arg: Type): Type } = identity
console.log(myIdentity2(64))

// 在 interface 中使用泛型，于 myIdentity2 相同
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

let myIdentityFn: GenericIdentityFn = identity;
console.log(myIdentityFn(64))

// 进一步，我们可以提示泛型的作用域到 interface 中而不是函数, 这样可以达到与之前的例子同样的目的
interface GenericIdentityFn2<Type> {
  (arg: Type): Type;
}
let myIdentityFn2: GenericIdentityFn2<number> = identity;
console.log(myIdentityFn2(64))

}