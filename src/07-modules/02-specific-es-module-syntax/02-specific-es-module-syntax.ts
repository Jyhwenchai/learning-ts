// TypeScript 特定的 ES 模块语法

// 可以使用与 JavaScript 值相同的语法导出和导入类型：
import type { Cat, Dog } from './animal'
type Animals = Cat | Dog


// import type { createCatName } from './animal'
// const name = createCatName() // 错误无法使用

import { createCatName } from './animal'
 const name = createCatName()

 