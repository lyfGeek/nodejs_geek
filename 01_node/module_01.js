/*
* 模块化。
* 在 node 中，一个 js 文件就是一个模块。
*
* 在 node 中，每一个 js 文件中的 js 代码都是独立运行在一个函数中的。
* 而不是全局作用域。
* */

console.log("我是一个模块。");

var x = 10;
var y = 20;

// 向外部暴露属性或方法。exports。

exports.x = "我是 module_01.js 中的 x。";
exports.y = '我是 y。'
