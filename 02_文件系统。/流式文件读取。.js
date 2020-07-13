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
    ws.end();
})

// 监听流的开启和关闭。
ws.once('open', function () {
    console.log('可写流打开了。')
})
ws.once('close', function () {
    console.log('可写流关闭了。')
})


// 如果要读取一个可读流中的数据，必须要为可读流绑定一个 data 事件，data 事件绑定完成，ta 会自动开始读取数据。
rs.on('data', function (data) {
    // console.log(data);
    // 将读取到的数据写入到可写流中。
    ws.write(data);
})


/*
/usr/local/bin/node /home/geek/WebstormProjects/untitled/02_文件系统。/流式文件读取。.js
可读流打开了。
<Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 01 00 00 01 00 01 00 00 ff db 00 43 00 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 ... 39606 more bytes>
可读流关闭了。

Process finished with exit code 0
 */
