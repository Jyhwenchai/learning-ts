// Module (模块)

// 在 TypeScript 中，就像在 ECMAScript 2015 中一样，任何包含顶级 import 或 export 的文件都被视为 mudule。
// 相反，没有任何顶级导入或导出声明的文件被视为其内容在全局范围内可用的脚本（因此也适用于模块）。
// 模块在它们自己的范围内执行，而不是在全局范围内。这意味着在模块中声明的变量、函数、类等在模块外部是不可见的，除非它们使用一种导出形式显式导出。
// 相反，要使用从不同模块导出的变量、函数、类、接口等，必须使用其中一种导入形式导入。

// 在我们开始之前，了解 TypeScript 将什么视为模块非常重要。 
// JavaScript 规范声明任何没有导出或顶级 await 的 JavaScript 文件都应被视为脚本而不是模块

// 在脚本文件中，变量和类型被声明在共享全局范围内，
// 并且假设您将使用 outFile 编译器选项将多个输入文件连接到一个输出文件中，
// 或者在 HTML 中使用多个 <script> 标签加载这些文件（以正确的顺序！）。

// 如果您有一个当前没有任何导入或导出的文件，但您希望被视为一个模块，请添加以下行：
export {}

// 这会将文件更改为不导出任何内容的模块。无论您的模块目标如何，此语法都有效。