// 条件类型, 它看起来有点像 ? : 表达式
interface Animal {
  live(): void;
}

interface Dog extends Animal {
  woof(): void;
}

// 使用条件判断来指定类型, 下面 Example1 = number
type Example1 = Dog extends Animal ? number : string;

// Exampel2 = string
type Example2 = RegExp extends Animal ? number : string;

// 条件类型在泛型中很有用，例如
interface IdLabel {
  id: number;
}

interface NameLabel {
  name: string;
}

function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw "unimplemented";
}

// 上面使用重载的方法列表可以使用下面的方法替代
type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;
function createLabel2<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented";
}

let a = createLabel2("typescript");// a: NameLabel
let b = createLabel2(2.8);	// b: IdLabel
let c = createLabel2(Math.random() ? "hello" : 42);	// c: NameLabel | IdLabel
