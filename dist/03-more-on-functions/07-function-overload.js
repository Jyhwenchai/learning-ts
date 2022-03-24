"use strict";
{
    function makeDate(mOrTimestamp, d, y) {
        if (d !== undefined && y !== undefined) {
            return new Date(y, mOrTimestamp, d);
        }
        else {
            return new Date(mOrTimestamp);
        }
    }
    const d1 = makeDate(12345678);
    const d2 = makeDate(5, 5, 2022);
    console.log(d1, d2);
    function len(x) {
        return x.length;
    }
    len(""); // OK
    len([0]); // OK
}
