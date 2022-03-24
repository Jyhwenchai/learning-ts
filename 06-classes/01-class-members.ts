{
// 类成员

// 1. 成员属性
// 默认成员是 public、writeable 的
class Point {
  x: number
  y: number

  constructor(x: number = 0, y: number = 0) {
    this.x = x
    this.y = y
  }
}

const pt = new Point()
pt.x = 0
pt.y = 0

// 类型注解是可选的，如果没有指定则是 any 类型
class Point2 {
  x = 0
  y = 0
}
const pt2= new Point2()
console.log(`${pt2.x}, ${pt2.y}`, typeof pt2.x)

// --strictPropertyInitialization 设置类字段是否需要在构造器中被初始化，默认为 true
class GoodGreeter {
  name: string

  constructor() {
    this.name = "hello"
  }
}

// 如果您打算通过构造函数以外的方式明确地知道会初始化一个字段（例如，可能一个外部库正在为您填充您的类的一部分），您可以使用明确的赋值断言运算符，！
class OKGreeter {
  name!: string
}

// 2. 只读成员属性, 只能在定义时和在构造器中初始化完成
class Greeter {
  readonly name: string = "world"
  constructor(otherName?: string) {
    if (otherName !== undefined) {
	    this.name = otherName
    }
  }

  err() {
    //this.name = "not ok";//error
  }
}

const g = new Greeter();
//g.name = "also not ok";	// error

}