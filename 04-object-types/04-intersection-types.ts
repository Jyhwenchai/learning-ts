// 交叉类型

interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;

const obj: ColorfulCircle = { color: "blue", radius: 42};

console.log(obj);
