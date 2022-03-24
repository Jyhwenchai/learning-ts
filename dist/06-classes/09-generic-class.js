"use strict";
{
    // 泛型类
    class Box {
        constructor(value) {
            this.contents = value;
        }
    }
    const b = new Box("Hello");
    console.log(b.contents);
    // 泛型类中无法使用静态类型参数
    class Box2 {
    }
}
