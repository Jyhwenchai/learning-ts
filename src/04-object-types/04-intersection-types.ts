{

// 交叉类型

interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

// 使用 & 可以绑定已经存在的类型
type ColorfulCircle = Colorful & Circle;

const obj: ColorfulCircle = { color: "blue", radius: 42};

console.log(obj);

}