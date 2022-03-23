{
// interface

// interface 是声明对象类型的另一种方式
interface Point {
  x: number
  y: number
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100} );

}