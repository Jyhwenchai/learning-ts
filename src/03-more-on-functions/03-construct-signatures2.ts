// 对于一些不需要new操作符的类型，你可以随意的选择使用 new 来指定构造器创建对象或者不使用 new 进行创建一个对象
interface CallOrConstruct {
  new (s: string): SomeObject;
  (n: number): number;
}

// construct
type SomeObject = {
  desc: string;
};

class TestConstructor implements SomeObject {
  desc: string;
  constructor(s: string) {
    this.desc = s;
  }
}

function createTestConstructor(ctor: CallOrConstruct, desc: string) {
    return new ctor(desc);
}

const tc: TestConstructor = createTestConstructor(TestConstructor,  "Hello, World");

// call
// function createNumber(ctor: CallOrConstruct, num: number) {
//   return ctor(num);
// }

// let num: number = createNumber(number, 42);

// console.log(obj, num);
// construct
// let object: Date = new CallOrConstruct("optional string s");

// call
// let myNumber: number = CallOrConstruct(/* n= */ 42);