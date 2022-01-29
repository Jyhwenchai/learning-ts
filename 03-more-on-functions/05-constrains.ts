// 对泛型的约束，这里约束 Type 必须是一个对象
function longest<Type extends { length: number } >(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

const longerArray = longest([1, 2], [1, 2, 3]);
const longerString = longest("alice", "bob");

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}
// 可以使用组合类型作为泛型的类型
const arr = combine<string | number>([1, 2, 3], ["hello"]);
console.log(arr);

// 函数做为泛型类型
function filter<Type, Func extends (arg: Type) => boolean>(arr: Type[], func: Func): Type[] {
  return arr.filter(func);
}
