{
// 类型别名

// {x: number, y: number} 为对象类型
// 这里使用 type 为其取一个别名为 Point
type Point = {
  x: number
  y: number
};

function printCoord(pt: Point) {
  console.log("The Coordinate's x value is: " + pt.x);
  console.log("The Coordinate's y value is: " + pt.y);
}

printCoord({ x: 100, y: 100});


// 可以给任何的类型定义别名，如
type ID = number | string

type UserInputSanitizedString = string

function sanitizeInput(str: string): UserInputSanitizedString {
  return str.toUpperCase();
}

let userInput = sanitizeInput("Jane");
console.log(userInput)

}