{
// 对象类型

// 函数参数为对象类型
// pt: { x: number; y: number}
function printCoord(pt: { x: number; y: number}) {
    console.log("The coordname's x value is " + pt.x);
    console.log("The coordname's y value is " + pt.y);
}

printCoord({ x: 3, y: 7});

// 可选属性
function printName(obj: { first: string; last?: string}) {
  // 对象检查
  // if (obj.last !== undefined) {
  //   console.log(obj.last.toUpperCase());
  // }

  // 更加安全的写法
  console.log(obj.first, obj.last?.toUpperCase());
  
}

// 对于可选属性，它不是必填项，所以 printName 允许下面的方式调用
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

}