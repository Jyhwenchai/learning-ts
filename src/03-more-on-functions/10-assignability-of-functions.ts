{
// 函数的 void 返回类型可能会产生一些不寻常但预期的行为。
// void 并不一定意味着"不返回" 任何东西，只不过返回的值会被忽略
type voidFunc = () => void

const f1: voidFunc = () => { return true }
const f2: voidFunc = () => true
const f3: voidFunc = function () { return true }

console.log(f1(), f2(), f3());

// 当你显示的指定函数的返回值是 void 时，那么你不能返回任何值
function f4(): void {
   // return true;// error
}

const f5 = function (): void {
  //return true;//error
}

}