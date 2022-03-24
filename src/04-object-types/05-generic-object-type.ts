{

// 泛型 

// 想象 Box 允许包含任何类型的值，比如 string、number 等
// 这可以使用 any 实现
interface Box {
  contents: any
}

// 或者也是使用 unknown
interface Box2 {
  contents: unknown
}

// 当时这么做我们需要编写预防性检查，以确保对属性的正确操作
const x: Box2 = { contents: "hello, world" }
if (typeof x.contents === "string") {
  console.log(x.contents.toUpperCase());
}

// 对于安全的写法，我们可以为不同的类型的 contents 单独定义类型
interface NumberBox { contents: number }
interface StringBox { contents: string }
interface BooleanBox { contents: boolean }

// 但是我们必须创建不同的方法来统一的修改 contents
function setContents(box: StringBox, newContents: string): void;
function setContents(box: NumberBox, newContents: number): void;
function setContents(box: BooleanBox, newContents: boolean): void;
function setContents(box: { contents: any }, newContents: any) {
  box.contents = newContents;
}

// 一个更好的写法是使用泛型
interface Box3<Type> {
  contents: Type
}

// 现在可以使用 Box3 定义不同 contents 类型的属性对象
const box1: Box3<string> = { contents: "Hello, World"}
const box2: Box3<number> = { contents: 64 }
console.log(box1, box2);

// 同时对于修改 contents 的方法也可以简单很多
function setContents2<Type>(box: Box3<Type>, newContents: Type) {
  box.contents = newContents
}
setContents2(box2, 11)

// 注意也可以对类型别名使用泛型
type TypeBox<Type> = { contents: Type}

const typeBox: TypeBox<string> = { contents: "Hello, World"}
console.log(typeBox);

// 与 interface 应用泛型不同的时，type 可以做更多的事
// 例如它可以联合其它类型，因为 type 仅仅只是别名
type OrNull<Type> = Type | null
type OneOrMany<Type> = Type | Type[]
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
type OneOrManyOrNullStrings = OneOrManyOrNull<string>; 

}