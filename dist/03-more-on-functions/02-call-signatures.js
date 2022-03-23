"use strict";
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
const df = (num) => num > 0;
df.description = "this is function description.";
