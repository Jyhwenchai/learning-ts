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
    // 约束 Type 必须继承与 LengthWise 类型，这样它才能获得 length 属性
    function loggingIdentity(arg) {
        console.log(arg.length);
        return arg;
    }
    //loggingIdentity(3);//error
    loggingIdentity({ length: 10, value: 3 });
    // 在泛型约束中使用类型参数
    // 下面的函数约束Key 必须是 Type 类型的属性 
    function getProperty(obj, key) {
        return obj[key];
    }
    var x = { a: 1, b: 2, c: 3, d: 4 };
    getProperty(x, "a");
    // # 在泛型中使用类类型
    // 在 TypeScript 中使用泛型创建工厂时，需要通过其构造函数关联其类的类型
    // 下面的示例指明 c 必须是拥有 new (): Type 构造函数的类
    function create(c) {
        return new c();
    }
    // 创建一个 Date 对象，Date 有 new (): Date 这个构造函数，所以可以通过 create 方法创建
    var date = create(Date);
    console.log(date);
    var BeeKeeper_1 = /** @class */ (function () {
        function BeeKeeper() {
            this.hasMask = true;
        }
        return BeeKeeper;
    }());
    var ZooKeeper_1 = /** @class */ (function () {
        function ZooKeeper() {
            this.nametag = "Mikle";
        }
        return ZooKeeper;
    }());
    var Animal = /** @class */ (function () {
        function Animal() {
            this.numLegs = 4;
        }
        return Animal;
    }());
    var Bee = /** @class */ (function (_super) {
        __extends(Bee, _super);
        function Bee() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.keeper = new BeeKeeper_1();
            return _this;
        }
        return Bee;
    }(Animal));
    var Lion = /** @class */ (function (_super) {
        __extends(Lion, _super);
        function Lion() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.keeper = new ZooKeeper_1();
            return _this;
        }
        return Lion;
    }(Animal));
    function createInstance(c) {
        return new c();
    }
    createInstance(Lion).keeper.nametag;
    createInstance(Bee).keeper.hasMask;
}
