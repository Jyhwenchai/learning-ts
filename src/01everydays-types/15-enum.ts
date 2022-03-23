{
// 枚举类型
enum Direction {
  Up,
  Down,
  Left,
  Right
}

// 默认枚举的类型是 number，值从 0 开始
console.log(Direction.Up, Direction.Down)

// 可以改变起始值
enum Direction2 {
  Up = 1,
  Down,
  Left = 4,
  Right
}

console.log(Direction2.Up, Direction2.Right)

// 也可以是字符串
enum DirectionString {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

console.log(DirectionString.Up, DirectionString.Right)
}