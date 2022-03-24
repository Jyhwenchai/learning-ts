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
{
    // 静态成员
    var MyClass_1 = /** @class */ (function () {
        function MyClass() {
        }
        MyClass.printX = function () {
            console.log(MyClass.x);
        };
        MyClass.x = 0;
        return MyClass;
    }());
    console.log(MyClass_1.x);
    MyClass_1.printX();
    // 静态成员也可以使用 public protected private 修饰符来限定访问
    var MyClass2 = /** @class */ (function () {
        function MyClass2() {
        }
        MyClass2.x = 0;
        return MyClass2;
    }());
    // console.log(MyClass.x);//error
    // 静态成员也可以继承
    var Base = /** @class */ (function () {
        function Base() {
        }
        Base.getGreeting = function () {
            return "Hello world";
        };
        return Base;
    }());
    var Derived_1 = /** @class */ (function (_super) {
        __extends(Derived, _super);
        function Derived() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.myGreeting = Derived.getGreeting();
            return _this;
        }
        return Derived;
    }(Base));
    console.log(new Derived_1().myGreeting);
}
