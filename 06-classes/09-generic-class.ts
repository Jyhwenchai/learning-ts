{
// 泛型类
class Box<Type> {
  contents: Type;
  constructor(value: Type) {
    this.contents = value;
  }
}

const b = new Box("Hello");
console.log(b.contents);

// 泛型类中无法使用静态类型参数
class Box2<Type> {
  //static defaultValue: Type;//error
}

}