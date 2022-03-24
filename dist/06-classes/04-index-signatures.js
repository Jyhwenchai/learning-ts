"use strict";
{
    // 在类中使用索引签名
    class MyClass {
        check(s) {
            return this[s];
        }
    }
    const obj = new MyClass();
    obj.isSuccess = false;
    obj.fn = s => s.length > 0;
    console.log(obj.check("isSuccess"));
    console.log(obj.check("fn"));
}
