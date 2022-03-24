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
    // 箭头函数
    // 如果您有一个调用的函数需要忽略其上下文中 this，则使用箭头函数不是方法定义是有意义的：
    var MyClass = /** @class */ (function () {
        function MyClass() {
            var _this = this;
            this.name = "MyClass";
            this.getName = function () {
                return _this.name;
            };
        }
        return MyClass;
    }());
    var c = new MyClass();
    var g = c.getName;
    // Prints "MyClass" instead of crashing
    console.log(g());
    // 这有一些权衡
    // 1. this 值保证在运行时是正确的，即使对于未使用 TypeScript 检查的代码也是如此
    // 2. 这将使用更多内存，因为每个类实例都会有自己的每个以这种方式定义的函数的副本
    // 3. 您不能在派生类中使用 super.getName，因为原型链中没有条目可以从中获取基类方法
    // # this 参数
    // 在方法或函数定义中，名为 this 的初始参数在 TypeScript 中具有特殊含义。这些参数在编译期间被擦除
    var SomeType = /** @class */ (function () {
        function SomeType() {
        }
        return SomeType;
    }());
    // function fn(this: SomeType, x:number) {
    // }
    // JavaScript 解析为 
    //function fn(x) {}
    // 如果你有一个派生类，它的 sameAs 方法现在将只接受同一个派生类的其他实例：
    var Box = /** @class */ (function () {
        function Box() {
            this.content = "";
        }
        Box.prototype.sameAs = function (other) {
            return other.content === this.content;
        };
        return Box;
    }());
    var DerivedBox = /** @class */ (function (_super) {
        __extends(DerivedBox, _super);
        function DerivedBox() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.otherContent = "?";
            return _this;
        }
        return DerivedBox;
    }(Box));
    var base = new Box();
    var derived = new DerivedBox();
    //derived.sameAs(base);//error
}
