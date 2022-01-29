type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  console.log("The Coordinate's x value is: " + pt.x);
  console.log("The Coordinate's y value is: " + pt.y);
}

printCoord({ x: 100, y: 100});


// 可以给任何的类型定义别名，如
type ID = number | string;

type UserInputSanitizedString = string;

function sanitizeInput(str: string): UserInputSanitizedString {
  return str.toUpperCase();
}

let userInput = sanitizeInput("Jane");

