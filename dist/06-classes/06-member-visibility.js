"use strict";
{
    // 成员可见性: public protected private
    class Greeter {
        greet() {
            console.log("hi!");
        }
        getName() {
            return "hi";
        }
    }
    // protected 修饰符对于直接子类可访问
    class SpecialGreeter extends Greeter {
        howdy() {
            console.log("Howdy, " + this.getName());
        }
    }
    const g = new SpecialGreeter();
    g.greet();
    //g.getName();	// error, 基类中的 protected 的成员属性或方法无法被派生类的实例对象访问, 但是可以在派生类中重新定义
    class Base {
        constructor() {
            this.m = 10;
        }
    }
    class Derived extends Base {
        constructor() {
            super(...arguments);
            this.m = 15;
        }
    }
    const d = new Derived();
    console.log(d.m);
    // 2. 无效的跨层次 protected 成员访问
    class Base2 {
        constructor() {
            this.x = 1;
        }
    }
    class Derived1 extends Base2 {
        constructor() {
            super(...arguments);
            this.x = 5;
        }
    }
    class Derived2 extends Base2 {
        f1(other) {
            other.x = 10;
        }
        f2(other) {
            //other.x = 10;// error
        }
    }
    // private 
    class Base3 {
        constructor() {
            this.x = 0;
        }
    }
    const b = new Base3();
    //console.log(b.x);//error, private 成员只能在本类中进行访问
    console.log(b["x"]); // 跳过编译检查
}
