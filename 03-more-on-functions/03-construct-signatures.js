{
    // javascript 函数也可以用 new 操作符调用，对应的 typescript 将它们称为 constructors (构造函数)，因为它们通常会创建一个新对象。
    // 你可以在一个 call signature 前面添加一个 new 关键字来表示一个 construct signature (构造函数签名)
    // type SomeObject = {
    //   desc: string
    // };
    var SomeObject = /** @class */ (function () {
        function SomeObject(desc) {
            this.desc = desc;
        }
        return SomeObject;
    }());
    function fn(ctor, desc) {
        return new ctor(desc);
    }
    // const so: SomeObject = { desc: "hello"}
    // fn(SomeObject, 'hello')
    // 我们可以这样使用
    // class TestConstructor implements SomeObject {
    //   desc: string
    //   constroctor(desc: string) {
    //     this.desc = desc
    //   }
    // }
    var obj = fn(SomeObject, "Hello, World");
    console.log(obj.desc);
}
