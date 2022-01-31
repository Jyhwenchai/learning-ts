// 映射修饰符
// 在映射期间可以应用两个额外的修饰符：readonly 和 ?分别影响可变性和可选性。
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;	 
  readonly name: string;
}

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

