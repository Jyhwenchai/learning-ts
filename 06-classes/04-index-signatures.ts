{

// 在类中使用索引签名
class MyClass {
  [s: string]: boolean | ((s: string) => boolean);
  
  check(s: string) {
    return this[s] as boolean;
  }
}

const obj: MyClass = new MyClass()
obj.isSuccess = false
obj.fn = s => s.length > 0

console.log(obj.check("isSuccess"))
console.log(obj.check("fn"))
}

