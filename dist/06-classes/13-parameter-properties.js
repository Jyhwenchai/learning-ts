"use strict";
{
    // 参数属性
    // TypeScript 提供了特殊的语法，用于将构造函数参数转换为具有相同名称和值的类属性。
    // 这些称为参数属性，是通过在构造函数参数前加上可见性修饰符 public、private、protected 或 readonly 之一来创建的。结果字段获取这些修饰符：
    class Params {
        constructor(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
        }
    }
    const a = new Params(1, 2, 3);
    console.log(a);
}
