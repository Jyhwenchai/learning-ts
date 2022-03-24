// 映射类型
// 映射类型建立在索引签名的语法之上，用于声明未提前声明的属性类型

type Horse = {
  del: boolean
  rodney: boolean
}

// 索引签名
type OnlyBoolsAndHorses = {
  [key: string]: boolean | Horse
}

const conforms: OnlyBoolsAndHorses = {
  del: true,
  rodney: false,
}

// 映射类型是泛型类型，可以通过迭代(通过 keyof)来创建关联一个类型的属性
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
}

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

// 在此示例中，OptionsFlags 将从类型 FeatureFlags 中获取所有属性并将其值更改为布尔值。
type FeatureOptions = OptionsFlags<FeatureFlags>; 
/*
type FeatureOptions = {
  darkMode: boolean;
newUserProfile: boolean;
}

*/
