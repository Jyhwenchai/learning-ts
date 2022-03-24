var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 抽象类，在 TypeScript 中 class、method、field 都可以是抽象的
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.printName = function () {
        console.log("Hello, " + this.getName());
    };
    return Base;
}());
// const b = new Base();//error, 不能够创建一个抽象类
// 扩展于抽象类
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derived.prototype.getName = function () {
        return "world";
    };
    return Derived;
}(Base));
var d = new Derived();
d.printName();
// # 抽象类的构造函数签名
function greet(ctor) {
    //const instance = new ctor();// error, 不能创建一个抽象类的实例
}
function greet2(ctor) {
    var instance = new ctor();
    instance.printName();
}
greet(Derived);
//greet(Base);//error
