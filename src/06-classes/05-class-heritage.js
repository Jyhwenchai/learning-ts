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
var Sonar = /** @class */ (function () {
    function Sonar() {
    }
    Sonar.prototype.ping = function () {
        console.log("ping!");
    };
    return Sonar;
}());
var C = /** @class */ (function () {
    function C() {
        this.x = 0;
    }
    return C;
}());
var c = new C();
//c.y = 10;	// error
// 3.extends 子句
// 类可以扩展子其它类型
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("moving along!");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.woof = function (times) {
        for (var i = 0; i < times; i++) {
            console.log("woof!");
        }
    };
    return Dog;
}(Animal));
var d = new Dog();
d.move();
d.woof(3);
// 4.成员方法覆盖
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.greet = function () {
        console.log("Hello, world");
    };
    return Base;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derived.prototype.greet = function (name) {
        if (name === undefined) {
            _super.prototype.greet.call(this);
        }
        else {
            console.log("Hello, ".concat(name.toUpperCase()));
        }
    };
    return Derived;
}(Base));
var dd = new Derived();
dd.greet();
dd.greet("reader");
// 使用基类关联派生类的引用
var b = dd;
b.greet();
var AnimalHouse = /** @class */ (function () {
    function AnimalHouse(animal) {
        this.resident = animal;
    }
    return AnimalHouse;
}());
var DogHouse = /** @class */ (function (_super) {
    __extends(DogHouse, _super);
    function DogHouse(dog) {
        return _super.call(this, dog) || this;
    }
    return DogHouse;
}(AnimalHouse));
// 6.初始化顺序
var Base2 = /** @class */ (function () {
    function Base2() {
        this.name = "base";
        console.log("my name is " + this.name);
    }
    return Base2;
}());
var Derived2 = /** @class */ (function (_super) {
    __extends(Derived2, _super);
    function Derived2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "derived";
        return _this;
    }
    return Derived2;
}(Base2));
// 1. 首先初始化基类的成员属性
// 2. 运行基类的构造器
// 3. 初始化派生类的成员属性
// 4. 运行派生类的构造器
var ddd = new Derived2();
// 注意：
var MsgError = /** @class */ (function (_super) {
    __extends(MsgError, _super);
    function MsgError(m) {
        var _this = _super.call(this, m) || this;
        // Set the prototype explicitly.
        Object.setPrototypeOf(_this, MsgError.prototype);
        return _this;
    }
    MsgError.prototype.sayHello = function () {
        return "hello " + this.message;
    };
    return MsgError;
}(Error));
var err = new MsgError("TypeScript");
err.sayHello();
