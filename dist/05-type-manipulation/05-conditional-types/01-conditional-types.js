"use strict";
function createLabel(nameOrId) {
    throw "unimplemented";
}
function createLabel2(idOrName) {
    throw "unimplemented";
}
let a = createLabel2("typescript"); // a: NameLabel
let b = createLabel2(2.8); // b: IdLabel
let c = createLabel2(Math.random() ? "hello" : 42); // c: NameLabel | IdLabel
