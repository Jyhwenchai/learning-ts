{
// 可选属性
interface PaintOptions {
  xPos?: number;
  yPos?: number;
}

// 当未提供 PaintOptions 对应的属性时，其属性值是 undefined (在严格模式下)
function paintShape(opts: PaintOptions){
  let xPos = opts.xPos === undefined ? 0 : opts.xPos;
  let yPos = opts.yPos === undefined ? 0 : opts.yPos;
  console.log(xPos, yPos);
}
paintShape({});
paintShape({xPos: 100});
paintShape({xPos: 100, yPos: 100});

// 通过添加 readonly 关键字可以定义只读属性
interface SomeType {
  readonly prop: string;
}
function doSomething(obj: SomeType) {
  console.log(`prop has the value '${obj.prop}'.`)
  //obj.prop = "hello";//error, 无法赋值
}

// 只读属性是一个对象
interface Home {
  readonly resident: {name: string, age: number}
}

function visitForBirthday(home: Home) {
  console.log(`Happy birthday ${home.resident.name}!`)
  home.resident.age++// 可以修改只读对象的属性
  //homt.resident = {name: "",age: 42};// error, 不能修改只读属性本身
}

const home: Home = { resident: { name: 'Mike', age: 22 }}
visitForBirthday(home)
console.log(home)

interface Person {
  name: string
  age: number
}

interface ReadonlyPerson {
  readonly name: string
  readonly age: number
}

let writablePerson: Person = { name: "Person McPersonface", age: 42 }
// TypeScript 在检查两种类型是否兼容时不会考虑这两种类型的属性是否是只读的，因此只读属性也可以通过别名进行更改。
let readonlyPerson: ReadonlyPerson = writablePerson
console.log(readonlyPerson.age)
writablePerson.age++
console.log(readonlyPerson.age)

}