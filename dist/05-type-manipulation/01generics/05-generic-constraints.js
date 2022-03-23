"use strict";
// 约束 Type 必须继承与 LengthWise 类型，这样它才能获得 length 属性
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
//loggingIdentity(3);//error
loggingIdentity({ length: 10, value: 3 });
// 在泛型约束中使用类型参数
// 下面的函数约束Key 必须是 Type 类型的属性 
function getProperty(obj, key) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
// # 在泛型中使用类类型
// 在 TypeScript 中使用泛型创建工厂时，需要通过其构造函数引用类类型
function create(c) {
    return new c();
}
let date = create(Date);
console.log(date);
class BeeKeeper {
    constructor() {
        this.hasMask = true;
    }
}
class ZooKeeper {
    constructor() {
        this.nametag = "Mikle";
    }
}
class Animal {
    constructor() {
        this.numLegs = 4;
    }
}
class Bee extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new BeeKeeper();
    }
}
class Lion extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new ZooKeeper();
    }
}
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
