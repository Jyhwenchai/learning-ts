{
    // 泛型类
    var GenericNumber = /** @class */ (function () {
        function GenericNumber() {
        }
        return GenericNumber;
    }());
    var myNum = new GenericNumber();
    myNum.zeroValue = 0;
    myNum.add = function (x, y) {
        return x + y;
    };
    var myStringNum = new GenericNumber();
    myStringNum.zeroValue = "";
    myStringNum.add = function (x, y) {
        return x + y;
    };
    console.log(myNum.add(1, 2), myStringNum.add("hello ", "world"));
}
