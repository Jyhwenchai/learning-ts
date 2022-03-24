var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _Foo_count;
{
    // 静态块允许您编写具有自己范围的语句序列，这些语句可以访问包含类中的私有字段。
    // 这意味着我们可以编写具有编写语句的所有功能的初始化代码，不会泄漏变量，并且可以完全访问我们类的内部。
    // using tsc --noEmit -t es6 06-classes/08-static-block-in-classes.ts to run
    // 类中的静态 block
    class Bar {
        constructor() {
            this.length = 0;
        }
    }
    class Foo {
        get count() {
            return __classPrivateFieldGet(Foo, _a, "f", _Foo_count);
        }
    }
    _a = Foo;
    _Foo_count = { value: 0 };
    (() => {
        var _b;
        try {
            const lastInstances = loadLastInstances();
            __classPrivateFieldSet(_b = Foo, _a, __classPrivateFieldGet(_b, _a, "f", _Foo_count) + lastInstances.length, "f", _Foo_count);
        }
        catch (_c) { }
    })();
    function loadLastInstances() {
        return new Bar();
    }
}
