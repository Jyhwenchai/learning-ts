"use strict";
{
    // 使用 instanceof 进行类型收窄
    function logValue(x) {
        if (x instanceof Date) {
            console.log(x.toUTCString());
        }
        else {
            console.log(x.toUpperCase());
        }
    }
    logValue(Date());
    logValue("2022-02-02");
}
