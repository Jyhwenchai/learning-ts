{
// 类表达式
// 类表达式和类的声明类型，但它不需要一个具体的名字
const someClass = class<Type> {
  content: Type;
  constructor(value: Type) {
    this.content = value;
  }
}

const m = new someClass("Hello, world");// m: someClass<string>
console.log(m)

}