"use strict";
{
    // 泛型类
    class GenericNumber {
    }
    let myNum = new GenericNumber();
    myNum.zeroValue = 0;
    myNum.add = function (x, y) {
        return x + y;
    };
    let myStringNum = new GenericNumber();
    myStringNum.zeroValue = "";
    myStringNum.add = function (x, y) {
        return x + y;
    };
    console.log(myNum.add(1, 2), myStringNum.add("hello ", "world"));
}
