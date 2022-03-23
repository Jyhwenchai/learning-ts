"use strict";
// 参数属性
class Params {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
const a = new Params(1, 2, 3);
//console.log(a.z);// error
