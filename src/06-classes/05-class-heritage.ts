{
// 类的继承
// 1. 使用 implements 实现 interface
interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}

// 2.注意，实现接口的类中不会改变接口中所定义的类型，所以我们应该明确的指出与接口相同的类型
interface Checkable {
  check(name: string): boolean;
}
/*
class NameChecker implements Checkable {
  check(s) {// should be check(name: string): boolean;
    return s.toLowercase() === "ok";// error
  }
}
*/

// 同样对于属性也应该显示的写出确定的属性
interface A {
 x: number
 y?: number
}

class C implements A {
  x = 0
}

const c = new C();
//c.y = 10;	// error
console.log(c);


// 3. extends
// 类可以扩展子其它类型
class Animal {
  move() {
    console.log("moving along!");
  }
}

class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("woof!");
    }
  }
}

const d = new Dog();
d.move();
d.woof(3);

// 4.成员方法覆盖
class Base {
  greet() {
    console.log("Hello, world");
  }
}

class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
	    super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}

const dd = new Derived();
dd.greet();
dd.greet("reader");


// 使用基类关联派生类的引用
const b: Base = dd;
b.greet();

// 5.类型字段声明
interface Animal {
  dateOfBirth: any;
}

interface Dog extends Animal {
  breed: any;
}

class AnimalHouse {
  resident: Animal;
  constructor(animal: Animal) {
    this.resident = animal;
  }
}

class DogHouse extends AnimalHouse {
// Does not emit JavaScript code,
// only ensures the types are correct
  declare resident: Dog;
  constructor(dog: Dog) {
    super(dog);
  }
}


// 6.初始化顺序
class Base2 {
  name = "base";
  constructor() {
    console.log("my name is " + this.name);
  }
}

class Derived2 extends Base2 {
  name = "derived"
}

// 1. 首先初始化基类的成员属性
// 2. 运行基类的构造器
// 3. 初始化派生类的成员属性
// 4. 运行派生类的构造器
const ddd = new Derived2();

// 注意：FIXME
class MsgError extends Error {
  constructor(m: string) {
    super(m);
    // Set the prototype explicitly.
    // Object.setPrototypeOf(this, MsgError.prototype);
  }
  sayHello() {
    return "hello " + this.message;
  }
}

const err = new MsgError("TypeScript");
err.sayHello();

}