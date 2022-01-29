// 组合类型
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}

printId(101);

printId("202");

// TypeScript 仅允许组合的类型执行有相同的操作(函数), 可以使用类型判断来解决这个问题
function printId2(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); 
  } else {
    console.log(id);
  }
}

// 如果组合的类型具有相同的操作，那么可以直接使用
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}
