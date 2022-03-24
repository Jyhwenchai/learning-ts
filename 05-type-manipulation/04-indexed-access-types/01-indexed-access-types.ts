{

// 可以使用`索引访问类型`来查看一种类型的特定属性
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];	// Age = number

// 索引类型本身就是一种类型，因此我们可以使用 union、keyof 或其他类型
type I1 = Person["age" | "name"];	// I1 = string | number
type I2 = Person[keyof Person];		// I2 = string | number | boolean

type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName]; 		// I3 = string | boolean

// 可以使用 number  对数组获取数组元素的类型
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
]

type Person2 = typeof MyArray[number];	// 这里得到一个对象的类型 Person2 = { name: string, age: number };
// 也可以嵌套使用，如果知道具体数组的元素类型的话
type Age2 = typeof MyArray[number]["age"];	// Age2 = number

const MyArray2 = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { addr: "Eve", number: 38 },
]

type myArray2 = typeof MyArray2[number] 
// type myArray2 = {
//    name: string;
//    age: number;
//    addr?: undefined;
//    number?: undefined;
// } | {
//    addr: string;
//    number: number;
//    name?: undefined;
//    age?: undefined;
// }

}