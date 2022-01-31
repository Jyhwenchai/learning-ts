// 解构条件类型
// 当条件类型作用于泛型类型时，它们在给定联合类型时变得可分配。例如，采取以下措施：
type ToArray<Type> = Type extends any ? Type[] : never;

// 传递一个联合类型
type StrArrOrNumArr = ToArray<string | number>;	// StrArrOrNumArr = string[] | number[]


type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;

type StrArrOrNumArr2 = ToArrayNonDist<string | number>;	// StrArrOrNumArr = (string | number)[]
