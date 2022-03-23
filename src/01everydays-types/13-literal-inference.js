{
    // 字面量引用
    // 对于字面量引用了一个对象类型，那么你可以修改对象的属性
    var obj = { counter: 0 };
    obj.counter = 1;
    console.log(obj);
    var arr = [1];
    arr.push(2);
    console.log(arr);
    var req = { url: "https//example.com", method: "GET" };
    function handleRequest(url, method) {
        console.log(url, method);
    }
    // handleRequest(req.url, req.method); 
    // 这里无法编译通过，因为 req.method 会被视为 string 类型，
    // 而 handleRequest 中 method 的类型是字面量的联合类型，这导致两者类型不匹配。
    // 可以使用以下方式解决这个问题
    // 1. 使用类型断言，说明其是 "GET" 字面量
    var req2 = { url: "https//example.com", method: "GET" };
    handleRequest(req2.url, req2.method);
    // 2. 可以使用  as const 将整个对象转换为类型字面量
    var req3 = { url: "https//example.com", method: "GET" };
    handleRequest(req3.url, req3.method);
}
