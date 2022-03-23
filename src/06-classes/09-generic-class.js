// 泛型类
var Box = /** @class */ (function () {
    function Box(value) {
        this.contents = value;
    }
    return Box;
}());
var b = new Box("Hello");
console.log(b.contents);
// 泛型类中无法使用静态类型参数
var Box2 = /** @class */ (function () {
    function Box2() {
    }
    return Box2;
}());
