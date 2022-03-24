{
    // 在类中的动态运行时 this
    // TypeScript 不会改变 JavaScript 的运行时行为
    var MyClass = /** @class */ (function () {
        function MyClass() {
            this.name = "MyClass";
        }
        MyClass.prototype.getName = function () {
            return this.name;
        };
        return MyClass;
    }());
    var c = new MyClass();
    var obj = {
        name: "obja",
        getName: c.getName
    };
    // Prints "obj", not "MyClass"
    console.log(obj.getName());
}
