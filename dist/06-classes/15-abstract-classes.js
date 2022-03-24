"use strict";
{
    // 抽象类，在 TypeScript 中 class、method、field 都可以是抽象的
    class Base {
        printName() {
            console.log("Hello, " + this.getName());
        }
    }
    // const b = new Base();//error, 不能够创建一个抽象类
    // 扩展于抽象类
    class Derived extends Base {
        getName() {
            return "world";
        }
    }
    const d = new Derived();
    d.printName();
    // 抽象类的构造函数签名
    function greet(ctor) {
        //const instance = new ctor();// error, 不能创建一个抽象类的实例
    }
    function greet2(ctor) {
        const instance = new ctor();
        instance.printName();
    }
    greet(Derived);
    //greet(Base);//error
}
