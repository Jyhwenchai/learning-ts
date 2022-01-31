// 类扩展
const someClass = class<Type> {
  content: Type;
  constructor(value: Type) {
    this.content = value;
  }
}

const m = new someClass("Hello, world");// m: someClass<string>
