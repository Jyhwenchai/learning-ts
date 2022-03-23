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
// 基于 this 的保证
var FileSystemObject = /** @class */ (function () {
    function FileSystemObject(path, networked) {
        this.path = path;
        this.networked = networked;
    }
    FileSystemObject.prototype.isFile = function () {
        return this instanceof FileRep;
    };
    FileSystemObject.prototype.isDirectory = function () {
        return this instanceof Directory;
    };
    FileSystemObject.prototype.isNetworked = function () {
        return this.networked;
    };
    return FileSystemObject;
}());
var FileRep = /** @class */ (function (_super) {
    __extends(FileRep, _super);
    function FileRep(path, content) {
        var _this = _super.call(this, path, false) || this;
        _this.content = content;
        return _this;
    }
    return FileRep;
}(FileSystemObject));
var Directory = /** @class */ (function (_super) {
    __extends(Directory, _super);
    function Directory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Directory;
}(FileSystemObject));
var fso = new FileRep("foo/bar.txt", "foo");
if (fso.isFile()) {
    fso.content;
}
else if (fso.isDirectory()) {
    fso.children;
}
else if (fso.isNetworked()) {
    fso.host;
}
