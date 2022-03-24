"use strict";
{
    // 静态成员
    class MyClass {
        static printX() {
            console.log(MyClass.x);
        }
    }
    MyClass.x = 0;
    console.log(MyClass.x);
    MyClass.printX();
    // 静态成员也可以使用 public protected private 修饰符来限定访问
    class MyClass2 {
    }
    MyClass2.x = 0;
    // console.log(MyClass.x);//error
    // 静态成员也可以继承
    class Base {
        static getGreeting() {
            return "Hello world";
        }
    }
    class Derived extends Base {
        constructor() {
            super(...arguments);
            this.myGreeting = Derived.getGreeting();
        }
    }
    console.log(new Derived().myGreeting);
}
