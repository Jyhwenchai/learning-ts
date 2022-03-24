var TestConstructor = /** @class */ (function () {
    function TestConstructor(s) {
        this.desc = s;
    }
    return TestConstructor;
}());
function createTestConstructor(ctor, desc) {
    return new ctor(desc);
}
var tc = createTestConstructor(TestConstructor, "Hello, World");
// call
// function createNumber(ctor: CallOrConstruct, num: number) {
//   return ctor(num);
// }
// let num: number = createNumber(number, 42);
// console.log(obj, num);
// construct
// let object: Date = new CallOrConstruct("optional string s");
// call
// let myNumber: number = CallOrConstruct(/* n= */ 42);
