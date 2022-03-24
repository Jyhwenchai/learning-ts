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
    // 基于 this 的保证
    // 您可以在类和接口中的方法的返回位置使用 this is 类型。
    // 当与一个收窄的类型（例如 if 语句）混合时，目标对象的类型将收窄到指定的类型。
    var FileSystemObject = /** @class */ (function () {
        function FileSystemObject(path, networked) {
            this.path = path;
            this.networked = networked;
        }
        FileSystemObject.prototype.isFile = function () {
            return this instanceof FileRep_1;
        };
        FileSystemObject.prototype.isDirectory = function () {
            return this instanceof Directory_1;
        };
        FileSystemObject.prototype.isNetworked = function () {
            return this.networked;
        };
        return FileSystemObject;
    }());
    var FileRep_1 = /** @class */ (function (_super) {
        __extends(FileRep, _super);
        function FileRep(path, content) {
            var _this = _super.call(this, path, false) || this;
            _this.content = content;
            return _this;
        }
        return FileRep;
    }(FileSystemObject));
    var Directory_1 = /** @class */ (function (_super) {
        __extends(Directory, _super);
        function Directory() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Directory;
    }(FileSystemObject));
    var fso = new FileRep_1("foo/bar.txt", "foo");
    if (fso.isFile()) {
        console.log(fso.content);
    }
    else if (fso.isDirectory()) {
        console.log(fso.children);
    }
    else if (fso.isNetworked()) {
        console.log(fso.host);
    }
    // 基于 this 的类型保护的一个常见用例是允许对特定字段进行延迟验证。
    // 例如，当 hasValue 被验证为 true 时，这种情况会从 box 中保存的值中删除一个 undefined：
    var Box = /** @class */ (function () {
        function Box() {
        }
        Box.prototype.hasValue = function () {
            return this.value !== undefined;
        };
        return Box;
    }());
    var box = new Box();
    box.value = "Gameboy";
    if (box.hasValue()) {
        console.log(box.value);
    }
    var box2 = new Box();
    console.log(box2.value);
}
