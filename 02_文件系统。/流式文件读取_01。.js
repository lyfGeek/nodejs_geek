let fs = require('fs');

// 创建一个可读流。
let rs = fs.createReadStream('a.jpg');
// 创建一个可写流。
let ws = fs.createWriteStream('b.jpg');

// 监听流的开启和关闭。
rs.once('open', function () {
    console.log('可读流打开了。')
})
rs.once('close', function () {
    console.log('可读流关闭了。')
    // 数据读取完毕，关闭可写流。
    // ws.end();
})

// 监听流的开启和关闭。
ws.once('open', function () {
    console.log('可写流打开了。')
})
ws.once('close', function () {
    console.log('可写流关闭了。')
})

// 将可读流中的内容直接输出到可写流中。
rs.pipe(ws);
