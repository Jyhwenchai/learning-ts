// n指出 multiply 至少需要一个参数, m 指出剩下的参数是可变参数，可变参数是一个数组
function multiply(n: number, ...m: number[]) {
  return m.map(x => n * x);
}

const a = multiply(10, 1, 2, 3, 4);
console.log(a);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);

const args = [8, 5];
//const angle = Math.atan2(...args);// error 因为 atan2 接受的是一个元组类型而不是数组

// 我们可以将数组转换为元组
const args2 = [8, 5] as const;
const angle = Math.atan2(...args2);
console.log(angle);
