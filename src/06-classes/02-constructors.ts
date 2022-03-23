// 构造器

class Point {
  x: number;
  y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

}

 // 构造器重载
class Point2 {
  x: number;
  y: number;

  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {
    this.x = 0;
    this.y = 0;
  }
}

// 父类调用
class Base {
  k = 4;
}

class Derived extends Base {
  constructor() {
    //console.log(this.k);//error, super() 的使用必须在 this 前
    super();
  }
}
