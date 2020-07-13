/*
    Buffer 缓冲区。
        Buffer 的结构和数组很像，操作的方法也和数组类似。
        数组中不能存储二进制文件，而 buffer 就是专门用来存储二进制数据的。
*/

let str = '李';

// 将一个字符串保存到 buffer 中。
let buf = Buffer.from(str);

console.log(buf);
// <Buffer 48 65 6c 6c 6f 20 47 65 65 6b>

// let str = 'Hello Geek';
// console.log(str.length);// 10。占用内存的大小。
// console.log(buf.length);// 10。字符串的长度。

// let str = '李';
console.log(str.length);// 1。占用内存的大小。
console.log(buf.length);// 3。字符串的长度。

// buffer 中存储的都是二进制数据。
// 计算机显示十六进制数据。
// buffer 中的每一个元素的范围是 00 - ff（0 ~ 255） 00000000 ~ 11111111。


// 创建指定大小的 buffer。
// let buffer = new Buffer(10);
// console.log(buffer.length);

// 构造函数不推荐使用。

let buf2 = Buffer.alloc(10);
console.log(buf2);
// <Buffer 00 00 00 00 00 00 00 00 00 00>

let buf3 = Buffer.allocUnsafe(10);
console.log(buf3);
// <Buffer 01 00 00 00 00 00 00 00 2e e1>

let buf4 = Buffer.from('我是一段文本数据');
console.log(buf4);
console.log(buf4.toString());
// <Buffer e6 88 91 e6 98 af e4 b8 80 e6 ae b5 e6 96 87 e6 9c ac e6 95 b0 e6 8d ae>
// 我是一段文本数据
