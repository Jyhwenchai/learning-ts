{
    // 在类中使用索引签名
    var MyClass = /** @class */ (function () {
        function MyClass() {
        }
        MyClass.prototype.check = function (s) {
            return this[s];
        };
        return MyClass;
    }());
    var obj = new MyClass();
    obj.isSuccess = false;
    obj.fn = function (s) { return s.length > 0; };
    console.log(obj.check("isSuccess"));
    console.log(obj.check("fn"));
}
