"use strict";
{
    // 当未提供 PaintOptions 对应的属性时，其属性值是 undefined (在严格模式下)
    function paintShape(opts) {
        let xPos = opts.xPos === undefined ? 0 : opts.xPos;
        let yPos = opts.yPos === undefined ? 0 : opts.yPos;
        console.log(xPos, yPos);
    }
    paintShape({});
    paintShape({ xPos: 100 });
    paintShape({ xPos: 100, yPos: 100 });
    function doSomething(obj) {
        console.log(`prop has the value '${obj.prop}'.`);
        //obj.prop = "hello";//error, 无法赋值
    }
    function visitForBirthday(home) {
        console.log(`Happy birthday ${home.resident.name}!`);
        home.resident.age++; // 可以修改只读对象的属性
        //homt.resident = {name: "",age: 42};// error, 不能修改只读属性本身
    }
    const home = { resident: { name: 'Mike', age: 22 } };
    visitForBirthday(home);
    console.log(home);
    let writablePerson = { name: "Person McPersonface", age: 42 };
    // TypeScript 在检查两种类型是否兼容时不会考虑这两种类型的属性是否是只读的，因此只读属性也可以通过别名进行更改。
    let readonlyPerson = writablePerson;
    console.log(readonlyPerson.age);
    writablePerson.age++;
    console.log(readonlyPerson.age);
}
