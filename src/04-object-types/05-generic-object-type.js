{
    // 当时这么做我们需要编写预防性检查，以确保对属性的正确操作
    var x = { contents: "hello, world" };
    if (typeof x.contents === "string") {
        console.log(x.contents.toUpperCase());
    }
    function setContents(box, newContents) {
        box.contents = newContents;
    }
    // 现在可以使用 Box3 定义不同 contents 类型的属性对象
    var box1 = { contents: "Hello, World" };
    var box2 = { contents: 64 };
    console.log(box1, box2);
    // 同时对于修改 contents 的方法也可以简单很多
    function setContents2(box, newContents) {
        box.contents = newContents;
    }
    setContents2(box2, 11);
    var typeBox = { contents: "Hello, World" };
    console.log(typeBox);
}
