"use strict";
{
    function getBear(bear) {
        return bear;
    }
    const bear = getBear({ name: "Bear", honey: true });
    console.log(bear);
    function getBear2() {
        return { name: "Bear2", honey: false };
    }
    const bear2 = getBear2();
    console.log(bear2);
    function getWindow(window) {
        return window;
    }
    const wd = getWindow({ title: "Test", desc: "It's a test" });
    console.log(wd);
}
