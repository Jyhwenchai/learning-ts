{
    function doSomething(fn) {
        console.log(fn.description + " returned " + fn(6));
    }
    var df = function (num) { return num > 0; };
    df.description = "this is function description.";
    doSomething(df);
}
