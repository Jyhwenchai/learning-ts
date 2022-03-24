{
// 在大多数情况下，TypeScript 中的类在结构上进行比较，与其他类型相同。
class Point1 {
  x = 0;
  y = 0;
}

class Point2 {
  x = 0;
  y = 0;
}

// OK
const p: Point1 = new Point2();


class Person {
  name: string;
  age: number;
}


class Employee {
  name: string;
  age: number;
  salary: number;
}

// OK
const pp: Person = new Employee();


class Empty {}

function fn(x: Empty) {
  console.log(x);
  
}

fn(window)
fn({})
fn(fn)

}