{

// 扩展类型
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

// 使用 extends 实现继承以扩展新的属性
interface AddressWithUnit extends BasicAddress {
  unit: string;
}

// interface 也可以扩展自多个类型 
interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {color: "red", radius: 42};
console.log(cc);


}