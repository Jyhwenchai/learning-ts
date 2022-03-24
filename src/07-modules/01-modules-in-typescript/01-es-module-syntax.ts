// 在 TypeScript 中编写基于模块的代码时，需要考虑三件事：
// * 语法：我想用什么语法来导入和导出东西？
// * 模块解析：模块名称（或路径）与磁盘上的文件有什么关系？
// * 模块输出目标：我发出的 JavaScript 模块应该是什么样子？

// 文件可以通过 export default 声明主导出：hello.ts
import helloWorld from "./hello";
helloWorld()

// 除了默认导出，你还可以通过省略 default 来导出多个变量和函数：maths.ts
import { pi, phi, absolute } from './maths'

console.log(pi);
const absPhi = absolute(phi)
console.log(absPhi);

// 其它导入语法
// 可以使用 import {old as new} 之类的格式重命名导入：
import { pi as π } from './maths'
console.log(π)

// 你可以在一条 import 语句中混合使用上面的语法
import DefaultRandomNumberGenerator, { pi as PI } from "./maths";
console.log(new DefaultRandomNumberGenerator());
console.log(PI);

// 你可以使用 * 来导出所有的对象
import * as math from './maths'
console.log(math.pi);
console.log(math.absolute(math.phi));

// 你可以通过 import "./file" 导入一个文件，但不将任何变量包含到当前模块中：
import "./maths"

// 这么做 test.ts 中所有的代码会被执行，但不导入任何对象


// 