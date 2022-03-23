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
// using tsc --noEmit -t es6 06-classes/08-static-block-in-classes.ts to run
// 类中的静态 block
var Bar = /** @class */ (function () {
    function Bar() {
        this.length = 0;
    }
    return Bar;
}());
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Object.defineProperty(Foo.prototype, "count", {
        get: function () {
            return __classPrivateFieldGet(Foo, _a, "f", _Foo_count);
        },
        enumerable: false,
        configurable: true
    });
    var _a, _Foo_count;
    _a = Foo;
    _Foo_count = { value: 0 };
    (function () {
        var _b;
        try {
            var lastInstances = loadLastInstances();
            __classPrivateFieldSet(_b = Foo, _a, __classPrivateFieldGet(_b, _a, "f", _Foo_count) + lastInstances.length, "f", _Foo_count);
        }
        catch (_c) { }
    })();
    return Foo;
}());
function loadLastInstances() {
    return new Bar();
}
