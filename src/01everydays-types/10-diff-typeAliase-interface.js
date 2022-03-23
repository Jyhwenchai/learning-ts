{
    function getBear(bear) {
        return bear;
    }
    var bear = getBear({ name: "Bear", honey: true });
    console.log(bear);
    function getBear2() {
        return { name: "Bear2", honey: false };
    }
    var bear2 = getBear2();
    console.log(bear2);
    function getWindow(window) {
        return window;
    }
    var wd = getWindow({ title: "Test", desc: "It's a test" });
    console.log(wd);
}
