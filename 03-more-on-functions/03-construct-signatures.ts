
type SomeObject = {
  desc: string
};

// 通过在函数前添加 new 操作符，可以声明一个函数为构造函数
type SomeConstructor = {
  new (s: string): SomeObject;
};

function fn(ctor: SomeConstructor, desc: string) {
  return new ctor(desc);
}

// 我们可以这样使用
class TestConstructor implements SomeObject {
  desc: string;
  constroctor(desc: string) {
    this.desc = desc;
  }
}

const obj = fn(TestConstructor, "Hello, World");
console.log(obj.desc);




