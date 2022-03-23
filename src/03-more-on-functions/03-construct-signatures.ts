{

/// javascript 函数也可以用 new 操作符调用，对应的 typescript 将它们称为 constructors (构造函数)，因为它们通常会创建一个新对象。
/// 你可以在一个 call signature 前面添加一个 new 关键字来表示一个 construct signature (构造函数签名)

class SomeObject {
  desc: string
  constructor(desc: string) {
    this.desc = desc
  }
}

// 通过在函数调用签名前添加 new  关键字，可以声明一个函数为构造函数签名
// 那么你就可以定义的构造函数签名来创建一个对象，注意这个对象应该是一个 class 类型，应为只有 class 才能使用 new 操作符创建
type SomeConstructor = {
  new (s: string): SomeObject
};

function fn(ctor: SomeConstructor, desc: string) {
  // 返回一个符合 SomeContructor 构造函数签名的对象
  return new ctor(desc);
}

const obj = fn(SomeObject, "Hello, World");
console.log(obj.desc);

}