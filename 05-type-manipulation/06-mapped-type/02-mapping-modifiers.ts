{
// 映射修饰符
// 在映射期间可以应用两个额外的修饰符：readonly 和 ?分别影响可变性和可选性。
// 可以通过前缀 - 或 + 号移除或添加这些修饰符，如果不加前缀默认是 +
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;	 
  readonly name: string;
}

// UnLockedAccout 中的属性移除了 readonly 的作用
type UnlockedAccount = CreateMutable<LockedAccount>;
/*
 type UnlockedAccount = {
   id: string; // Type[Property] = string 
   name: string;
}
*/

// 移除可选类型属性的特性
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User = Concrete<MaybeUser>;
/*
type User = {
  id: string;
  name: string;
  age: number;
}

*/

}