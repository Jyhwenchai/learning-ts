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
    var a = createLabel2("typescript"); // a: NameLabel
    var b = createLabel2(2.8); // b: IdLabel
    var c = createLabel2(Math.random() ? "hello" : 42); // c: NameLabel | IdLabel
    console.log(a, b, c);
}
