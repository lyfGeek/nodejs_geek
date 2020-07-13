/*
    简单文件写入。
    fs.writeFile(file, data[, options], callback)
    fs.writeFileSync(file, data[, options])
        - file 要操作的文件路径。
        - data 要写入的数据。
        - options 选项，可以对写入进行一些设置。
        - callback 当写入完成后执行的函数。
 */


let fs = require('fs');

fs.writeFile('hello3.txt', '这是通过 writeFile(); 写入的内容。', function (err) {
    if (!err) {
        console.log('写入成功。');
    }
})
