{
    // 枚举类型
    var Direction = void 0;
    (function (Direction) {
        Direction[Direction["Up"] = 0] = "Up";
        Direction[Direction["Down"] = 1] = "Down";
        Direction[Direction["Left"] = 2] = "Left";
        Direction[Direction["Right"] = 3] = "Right";
    })(Direction || (Direction = {}));
    // 默认枚举的类型是 number，值从 0 开始
    console.log(Direction.Up, Direction.Down);
    // 可以改变起始值
    var Direction2 = void 0;
    (function (Direction2) {
        Direction2[Direction2["Up"] = 1] = "Up";
        Direction2[Direction2["Down"] = 2] = "Down";
        Direction2[Direction2["Left"] = 4] = "Left";
        Direction2[Direction2["Right"] = 5] = "Right";
    })(Direction2 || (Direction2 = {}));
    console.log(Direction2.Up, Direction2.Right);
    // 也可以是字符串
    var DirectionString = void 0;
    (function (DirectionString) {
        DirectionString["Up"] = "Up";
        DirectionString["Down"] = "Down";
        DirectionString["Left"] = "Left";
        DirectionString["Right"] = "Right";
    })(DirectionString || (DirectionString = {}));
    console.log(DirectionString.Up, DirectionString.Right);
}
