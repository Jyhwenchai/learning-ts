{
  interface Circle {
    kind: "circle";
    radius: number
  }
   
  interface Square {
    kind: "square"
    sideLength: number
  }
   
  type Shape = Circle | Square

  function getArea(shape: Shape) {
    if (shape.kind === "circle") {
      // shape 被识别为 Circle 类型
      return Math.PI * shape.radius ** 2;
    }
  }

  function getArea2(shape: Shape) {
    switch (shape.kind) {
      case "circle":
        // shape 被识别为 Circle 类型
        return Math.PI * shape.radius ** 2;
      case "square":
        // shape 被识别为 Squire 类型
        return shape.sideLength ** 2;
    }
  }

  function getArea3(shape: Shape) {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
      case "square":
        return shape.sideLength ** 2;
      default:
        // 使用 never 检测不存在的状况
        const _exhaustiveCheck: never = shape;
        return _exhaustiveCheck;
    }
  }

}