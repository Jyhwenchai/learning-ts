// 泛型类
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}

let myNum = new GenericNumber<number>();
myNum.zeroValue = 0;
myNum.add = function (x, y) {
  return x + y;
};

let myStringNum = new GenericNumber<string>();
myStringNum.zeroValue = "";
myStringNum.add = function (x, y) {
  return x + y;
};

console.log(myNum.add(1, 2), myStringNum.add("hello ", "world"));
