// 在条件类型中推断
// 条件类型为我们提供了一种使用 infer 关键字从我们在真实分支中比较的类型进行推断的方法。例如，我们可以在 Flatten 中推断出元素类型，而不是使用索引访问类型“手动”获取它：
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

type Str = Flatten<string[]>	// Str = string;
type Num = Flatten<number>;	// Num = number

// 下面的方法使用了 infer 关键字提取函数中的返回值类型
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return ? Return : never;
type Num1 = GetReturnType<() => number>;	// Num = number
type Str1 = GetReturnType<(x: string) => string>;	// Str1 = string
type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;	// Bools = boolean[]

// 当我们对具有多个签名的类型进行推断时，会得到最通用的一种类型，例如
declare function stringOrNum(x: string): number;
declare function stringOrNum(x: number): string;
declare function stringOrNum(x: string | number): string | number;
type T1 = ReturnType<typeof stringOrNum>;	// T1 = string | number
