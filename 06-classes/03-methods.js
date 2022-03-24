{
    // using tsc -t es5 03-methods.ts to run
    // 成员方法
    var Point = /** @class */ (function () {
        function Point() {
            this.x = 10;
            this.y = 10;
        }
        // 在方法中应该使用 this 来访问属性
        Point.prototype.scale = function (n) {
            this.x *= n;
            this.y *= n;
        };
        return Point;
    }());
    // Getter 和 Setter 只在 es5 及更高版本有效
    var C = /** @class */ (function () {
        function C() {
            this._length = 0;
        }
        Object.defineProperty(C.prototype, "length", {
            get: function () {
                return this._length;
            },
            set: function (value) {
                this._length = length;
            },
            enumerable: false,
            configurable: true
        });
        return C;
    }());
    // TypeScript 对访问器有一些特殊的推理规则：
    // 1. 如果没有 set 只有 get，那么属性会自动变为 readonly
    // 2. 如果 setter 参数的类型，那么从 getter 的返回类型推断
    // 3. getter 和 setter 必须有相同的成员可见性
    // 从 TypeScript 4.3 开始，可以使用不同类型的访问器来获取和设置。
    var Thing = /** @class */ (function () {
        function Thing() {
            this._size = 0;
        }
        Object.defineProperty(Thing.prototype, "size", {
            get: function () {
                return this._size;
            },
            set: function (value) {
                var num = Number(value);
                // Don't allow NaN, Infinity, etc
                // if (!Number.isFinite(num)) {
                //   this._size = 0
                //   return
                // }
                this._size = num;
            },
            enumerable: false,
            configurable: true
        });
        return Thing;
    }());
}
