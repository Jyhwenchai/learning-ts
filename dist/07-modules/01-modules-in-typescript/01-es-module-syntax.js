"use strict";
// 在 TypeScript 中编写基于模块的代码时，需要考虑三件事：
// * 语法：我想用什么语法来导入和导出东西？
// * 模块解析：模块名称（或路径）与磁盘上的文件有什么关系？
// * 模块输出目标：我发出的 JavaScript 模块应该是什么样子？
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 文件可以通过 export default 声明主导出：hello.ts
const hello_1 = __importDefault(require("./hello"));
(0, hello_1.default)();
