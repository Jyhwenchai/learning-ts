{
  // 使用 typeof 进行类型检查
  // TypeScript 期望 typeof 返回一组特定的字符串：
  // "string"
  // "number"
  // "bigint"
  // "boolean"
  // "symbol"
  // "undefined"
  // "object"
  // "function"

  function printAll(strs: string | string[] | null) {
    if (typeof strs === "object") {
      for (const s of strs) [ // null 也是 object 类型，这里允许结果会error
        console.log(s)
      ]
    } else if (typeof strs === "string") {
      console.log(strs)
    }
  }

  printAll("hello, world")
  printAll(["A", "B", "C"])
  printAll(null)
}