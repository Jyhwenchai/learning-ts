{
    // 类扩展
    var someClass = /** @class */ (function () {
        function class_1(value) {
            this.content = value;
        }
        return class_1;
    }());
    var m = new someClass("Hello, world"); // m: someClass<string>
    console.log(m);
}
