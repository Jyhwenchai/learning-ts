// 扩展类型
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

// 使用 extends 实现继承
interface AddressWithUnit extends BasicAddress {
  unit: string;
}

// TypeScript 允许多继承
interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {color: "red", radius: 42};


