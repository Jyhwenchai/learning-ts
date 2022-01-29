// 通用类型

// 可以使用 any 来表示任意的类型
interface AnyType {
  contents: any;
}

// 可以使用 unknown 表示任意的类型，但是在使用的时候我们需要进行类型检查来避免错误
interface UnknownType {
  contents: unknown;
}

let x: UnknownType = {
  contents: "hello world"
};
// 检查 contents 类型 
if (typeof x.contents === "string") {
  console.log(x.contents.toLowerCase());
}

// 或者使用类型断言
console.log((x.contents as string).toLowerCase());


// 最后一种编写通用类型的方法是使用 "泛型"
interface SomeType<Type> {
  contents: Type;
}

let st: SomeType<string> = {contents: "hello, world"};
console.log(st);

// 我们也可以使用别名定义一个泛型类型
type AnyObject<Type> = {
  contents: Type;
};

// 使用类型别名与泛型可以组合复杂的类型
type OrNull<Type> = Type | null;
 
type OneOrMany<Type> = Type | Type[];
 
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
           
type OneOrManyOrNullStrings = OneOrManyOrNull<string>;

