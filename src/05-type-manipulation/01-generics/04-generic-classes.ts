{

// 泛型类
class GenericNumber<NumType> {
  zeroValue: NumType
  add: (x: NumType, y: NumType) => NumType

  constructor(zeroValue: NumType, add:(x: NumType, y: NumType) => NumType) {
    this.zeroValue = zeroValue
    this.add = add
  }
}
const numberfn = function (x: number, y: number) {
  return x + y;
}

let myNum = new GenericNumber<number>(0, numberfn);
// myNum.zeroValue = 0;
// myNum.add = function (x, y) {
//   return x + y;
// }

const stringfn = function (x: string, y: string) {
  return x + y;
}
let myStringNum = new GenericNumber<string>("", stringfn);
// myStringNum.zeroValue = "";
// myStringNum.add = function (x, y) {
//   return x + y;
// }

console.log(myNum.add(1, 2), myStringNum.add("hello ", "world"));

}