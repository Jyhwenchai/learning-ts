"use strict";
{
    function createLabel(nameOrId) {
        if (typeof nameOrId === 'number') {
            return { id: nameOrId };
        }
        return { name: nameOrId };
    }
    function createLabel2(idOrName) {
        return typeof idOrName === 'number' ? { id: idOrName } : { name: idOrName };
    }
    let a = createLabel2("typescript"); // a: NameLabel
    let b = createLabel2(2.8); // b: IdLabel
    let c = createLabel2(Math.random() ? "hello" : 42); // c: NameLabel | IdLabel
    console.log(a, b, c);
}
