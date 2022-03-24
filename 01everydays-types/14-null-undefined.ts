{

// JavaScript 中有表示不存在和未初始化的值：undefined 和 null
// TypeScript 中也有相同名字且对应的两个名字，但它们的具体表现拒绝与是否开启 strictNullChecks 。

// 如果关闭了 strictNullChecks，那么一个 null 或 undefined 的值仍可以被正常的访问。但这并不是一个好的主意

// 如果关闭了 strictNullChecks，那么就需要我们对值进行类型检查，如下：
function doSomething(x: string | null) {
  if (x === null) {
    console.log('x is null')
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}

// TypeScript 也提供了非空断言操作符来断言一个值不是 null 或 undefined
function liveDangerously(x?: number | null) {
  console.log(x!.toFixed());
}

doSomething(null)
doSomething('World')

liveDangerously(22)

}