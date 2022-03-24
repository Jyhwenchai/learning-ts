{

// 泛型约束
interface LengthWise {
  length: number;
}

// 约束 Type 必须继承与 LengthWise 类型，这样它才能获得 length 属性
function loggingIdentity<Type extends LengthWise>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}

//loggingIdentity(3);//error
loggingIdentity({ length: 10, value: 3});

// 在泛型约束中使用类型参数
// 下面的函数约束Key 必须是 Type 类型的属性 
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");

// # 在泛型中使用类类型
// 在 TypeScript 中使用泛型创建工厂时，需要通过其构造函数关联其类的类型
// 下面的示例指明 c 必须是拥有 new (): Type 构造函数的类
function create<Type>(c: { new (): Type }): Type {
  return new c();
}

// 创建一个 Date 对象，Date 有 new (): Date 这个构造函数，所以可以通过 create 方法创建
let date: Date = create(Date);
console.log(date);

class BeeKeeper {
  hasMask: boolean = true;
}
 
class ZooKeeper {
  nametag: string = "Mikle";
}
 
class Animal {
  numLegs: number = 4;
}
 
class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}
 
class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}
 
function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}
 
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;

}