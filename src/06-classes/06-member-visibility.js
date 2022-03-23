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
// 成员可见性: public protected private
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function () {
        console.log("hi!");
    };
    Greeter.prototype.getName = function () {
        return "hi";
    };
    return Greeter;
}());
var SpecialGreeter = /** @class */ (function (_super) {
    __extends(SpecialGreeter, _super);
    function SpecialGreeter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpecialGreeter.prototype.howdy = function () {
        console.log("Howdy, " + this.getName());
    };
    return SpecialGreeter;
}(Greeter));
var g = new SpecialGreeter();
g.greet();
//g.getName();	// error, 基类中的 protected 的成员属性或方法无法被派生类的实例对象访问, 但是可以在派生类中重新定义
var Base = /** @class */ (function () {
    function Base() {
        this.m = 10;
    }
    return Base;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.m = 15;
        return _this;
    }
    return Derived;
}(Base));
var d = new Derived();
console.log(d.m);
// 2. 无效的跨层次 protected 成员访问
var Base2 = /** @class */ (function () {
    function Base2() {
        this.x = 1;
    }
    return Base2;
}());
var Derived1 = /** @class */ (function (_super) {
    __extends(Derived1, _super);
    function Derived1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.x = 5;
        return _this;
    }
    return Derived1;
}(Base2));
var Derived2 = /** @class */ (function (_super) {
    __extends(Derived2, _super);
    function Derived2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derived2.prototype.f1 = function (other) {
        other.x = 10;
    };
    Derived2.prototype.f2 = function (other) {
        //other.x = 10;// error
    };
    return Derived2;
}(Base2));
// private 
var Base3 = /** @class */ (function () {
    function Base3() {
        this.x = 0;
    }
    return Base3;
}());
var b = new Base3();
//console.log(b.x);//error, private 成员只能在本类中进行访问
console.log(b["x"]); // 跳过编译检查
