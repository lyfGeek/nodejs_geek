/**
 * 异步文件写入。
 * fs.open(path[, flags[, mode]], callback)
 * 异步调用的方法。结果都是通过回调函数的参数返回的。
 * 回调函数的两个参数。
 *      err ～ 错误对象，如果没有错误则为 null。
 *      id ～ 文件的描述符。
 *
 *
 */

let fs = require('fs');

let f;

// 打开文件。。
fs.open('hello2.txt', 'w', function (err, fd) {
    console.log('回调函数中的代码。')
    console.log(arguments);
    // [Arguments] { '0': null, '1': 17 }
    if (!err) {
        // console.log(fd);
        // f = fd;

        fs.write(fd, '这是异步写入的内容。', function (err) {
            if (!err) {
                console.log('写入成功。')
            }

            // 关闭文件。
            fs.close(fd, function (err) {
                if (!err) {
                    console.log('文件已关闭。');
                }
            });
        });

    } else {
        console.log(err);
    }

})

console.log('open 后的代码。')

// open 后的代码。
// 回调函数中的代码。
// [Arguments] { '0': null, '1': 17 }
