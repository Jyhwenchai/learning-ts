// 泛型在函数中的使用
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

const s = firstElement(["a", "b", "c"]);
const n = firstElement([1, 2, 3]);
const u = firstElement([]);

console.log(s, n, u);
