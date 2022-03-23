function fn(ctor, desc) {
    return new ctor(desc);
}
// 我们可以这样使用
var TestConstructor = /** @class */ (function () {
    function TestConstructor() {
    }
    TestConstructor.prototype.constroctor = function (desc) {
        this.desc = desc;
    };
    return TestConstructor;
}());
var obj = fn(TestConstructor, "Hello, World");
console.log(obj.desc);
