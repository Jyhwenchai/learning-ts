/// 一些对象，比如 JavaScript 的 Date 对象，可以在有或没有 new 的情况下调用。您可以任意组合相同类型的调用和构造签名：
//TODO?
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