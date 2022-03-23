var f1 = function () { return true; };
var f2 = function () { return true; };
var f3 = function () { return true; };
console.log(f1(), f2(), f3());
// 当你显示的指定函数的返回值是 void 时，那么你不能返回任何值
function f4() {
    // return true;// error
}
var f5 = function () {
    //return true;//error
};
