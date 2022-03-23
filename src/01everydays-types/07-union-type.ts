{

// 联合类型
// id: number | string
// 其中 id 为联合类型
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}

printId(101);

printId("202");

// TypeScript 仅允许联合类型执行同时拥有的有函数, 否则可以使用类型判断来解决这个问题
function printId2(id: number | string) {
  // 只有 string 类型由 toUpperCase()
  if (typeof id === "string") {
    console.log(id.toUpperCase()); 
  } else {
    console.log(id);
  }
}

// 如果联合类型具有相同的操作，那么可以直接使用
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

}