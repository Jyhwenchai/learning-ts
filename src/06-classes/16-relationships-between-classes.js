// 在大多数情况下，TypeScript 中的类在结构上进行比较，与其他类型相同。
var Point1 = /** @class */ (function () {
    function Point1() {
        this.x = 0;
        this.y = 0;
    }
    return Point1;
}());
var Point2 = /** @class */ (function () {
    function Point2() {
        this.x = 0;
        this.y = 0;
    }
    return Point2;
}());
var p = new Point2();
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var pp = new Employee();
var Empty = /** @class */ (function () {
    function Empty() {
    }
    return Empty;
}());
function fn(x) { }
fn(window);
fn({});
fn(fn);
