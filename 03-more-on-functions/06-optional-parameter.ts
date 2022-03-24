{
/// 可选参数
// 一个函数的参数可以被声明为可选的
function f(n?: number) {
   if (n !== undefined) {
     console.log(n!.toFixed(3));
   } else {
     console.log("n value is null.");
   }
}

f(10);
f();

// 可选参数回调
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}
myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));

}