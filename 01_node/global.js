/*
* 在 node 中有一个全局对象 global。
* 在全局中创建的变量都会作为 global 的属性保存。
* 在全局中创建的函数都会作为 global 的方法保存。
* */

// var a = 10;
// console.log(global.a);// undefined。

// a = 10;
// console.log(global.a);// 10。

var a = 10;

// arguments.callee
//    保存的是当前执行的函数对象。
console.log(arguments.callee + '');// [Function]

// 用 function (exports, require, module, __filename, __dirname) {   } 包起来了。

// 实际上模块中的代码都是包装在一个函数中执行的，并且在函数执行时传递给了 5 个实参。

/*
exports
    该对象将变量或函数暴露到外部。

require
    函数，引入外部的函数。

module
    当前模块本身。
    exports 就是 module 的属性。
    既可以使用 exports 导出，也可以使用 module.exports 导出。

__filename
    /home/geek/WebstormProjects/untitled/01_node/global.js

__dirname
    /home/geek/WebstormProjects/untitled/01_node
 */

///usr/bin/node /home/geek/WebstormProjects/untitled/01_node/global.js
// function (exports, require, module, __filename, __dirname) {
// /*
// * 在 node 中有一个全局对象 global。
// * 在全局中创建的变量都会作为 global 的属性保存。
// * 在全局中创建的函数都会作为 global 的方法保存。
// * */
//
// // var a = 10;
// // console.log(global.a);// undefined。
//
// // a = 10;
// // console.log(global.a);// 10。
//
// var a = 10;
//
// // arguments.callee
// //    保存的是当前执行的函数对象。
// console.log(arguments.callee + '')
//
// console.log(arguments);
// }

console.log(__filename);
console.log(__dirname);
console.log(arguments);
/*
/usr/bin/node /home/geek/WebstormProjects/untitled/01_node/global.js
[Arguments] {
  '0': {},
  '1':
   { [Function: require]
     resolve: { [Function: resolve] paths: [Function: paths] },
     main:
      Module {
        id: '.',
        exports: {},
        parent: null,
        filename: '/home/geek/WebstormProjects/untitled/01_node/global.js',
        loaded: false,
        children: [],
        paths: [Array] },
     extensions:
      [Object: null prototype] { '.js': [Function], '.json': [Function], '.node': [Function] },
     cache:
      [Object: null prototype] {
        '/home/geek/WebstormProjects/untitled/01_node/global.js': [Module] } },
  '2':
   Module {
     id: '.',
     exports: {},
     parent: null,
     filename: '/home/geek/WebstormProjects/untitled/01_node/global.js',
     loaded: false,
     children: [],
     paths:
      [ '/home/geek/WebstormProjects/untitled/01_node/node_modules',
        '/home/geek/WebstormProjects/untitled/node_modules',
        '/home/geek/WebstormProjects/node_modules',
        '/home/geek/node_modules',
        '/home/node_modules',
        '/node_modules' ] },
  '3': '/home/geek/WebstormProjects/untitled/01_node/global.js',
  '4': '/home/geek/WebstormProjects/untitled/01_node' }

Process finished with exit code 0

*/
