"use strict";
function printCoord(pt) {
    console.log("The Coordinate's x value is: " + pt.x);
    console.log("The Coordinate's y value is: " + pt.y);
}
printCoord({ x: 100, y: 100 });
function sanitizeInput(str) {
    return str.toUpperCase();
}
let userInput = sanitizeInput("Jane");
