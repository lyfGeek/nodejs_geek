// 引入其他的模块。

/*
* 在 node 中，通过 require() 函数来引入外部的模块。
* require() 可以传递一个文件的路径作为参数，node 将会自动根据该路径来引入外部模块。
* 如果使用相对路径，必须以 . 或 .. 开头。
*
* 使用 require() 引入模块，该函数会返回一个对象，这个对象代表的是引入的模块。
* */

var require1 = require("./module_01");/* 我是一个模块。*/

// console.log(x)/* ReferenceError: x is not defined*/
// console.log(require1.x)// undefined。

// exports.x = "我是 module_01.js 中的 x。";
// exports.y = '我是 y。'
console.log(require1.x);/* 我是 module_01.js 中的 x。*/
console.log(require1.y);/* 我是 y，*/
