{
    // 当未提供 PaintOptions 对应的属性时，其属性值是 undefined (在严格模式下)
    function paintShape(opts) {
        var xPos = opts.xPos === undefined ? 0 : opts.xPos;
        var yPos = opts.yPos === undefined ? 0 : opts.yPos;
        console.log(xPos, yPos);
    }
    paintShape({});
    paintShape({ xPos: 100 });
    paintShape({ xPos: 100, yPos: 100 });
    function doSomething(obj) {
        console.log("prop has the value '".concat(obj.prop, "'."));
        //obj.prop = "hello";//error, 无法赋值
    }
    function visitForBirthday(home) {
        console.log("Happy birthday ".concat(home.resident.name, "!"));
        home.resident.age++; // 可以修改只读对象的属性
        //homt.resident = {name: "",age: 42};// error, 不能修改只读属性本身
    }
    var home = { resident: { name: 'Mike', age: 22 } };
    visitForBirthday(home);
    console.log(home);
}
