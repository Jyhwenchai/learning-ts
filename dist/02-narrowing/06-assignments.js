"use strict";
{
    // 当我们为任何变量赋值时，TypeScript 会查看赋值的右侧并适当地缩小左侧。
    // x: string | number
    let x = Math.random() < 0.5 ? 10 : "hello world";
    x = 1;
    console.log(x); // x: number, x 被识别为 number 类型
    x = "goodbye!";
    console.log(x); // x: string, x 被识别为 string 类型
}
