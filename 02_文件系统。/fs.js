/*
    同步文件写入。
    文件的打开。
        fs.openSync(path, flags[, mode])
            flags。
                r 只读的。
                w 可写的。
            mode    设置文件的操作权限。

        返回一个文件的描述符作为结果。我们可以通过该描述符来对文件进行各种操作。

    向文件写入内容。
        fs.writeSync(fd, string[, position[, encoding]])
            fd。要写入文件的文件描述符。
            buffer。写入内容。
            position。写入的起始位置。
            encoding。写入的编码。
    保存并关闭文件。
*/

let fs = require('fs');

// 打开文件。
let fd = fs.openSync('hello.txt', 'w');

console.log(fd);// 17

// 向文件写入内容。
fs.writeSync(fd, '你好。')

// 关闭文件。
fs.closeSync(fd);
