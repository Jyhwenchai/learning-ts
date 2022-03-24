"use strict";
{
    // 构造器
    class Point {
        constructor(x = 0, y = 0) {
            this.x = x;
            this.y = y;
        }
    }
    // 构造器重载
    class Point2 {
        constructor(xs, y) {
            this.x = 0;
            this.y = 0;
        }
    }
    // 父类调用
    class Base {
        constructor() {
            this.k = 4;
        }
    }
    class Derived extends Base {
        constructor() {
            //console.log(this.k);//error, super() 的使用必须在 this 前
            super();
        }
    }
}
