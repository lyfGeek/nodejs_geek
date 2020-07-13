let fs = require('fs');

fs.readFile('hello3.txt', function (err, data) {
    if (!err) {
        console.log(data);
        // <Buffer e9 80 9a e8 bf 87 e5 8f af e5 86 99 e6 b5 81 e5 86 99 e5 85 a5 e6 96 87 e4 bb b6 e7 9a 84 e5 86 85 e5 ae b9 e3 80 82 e9 94 84 e7 a6 be e6 97 a5 e5 bd ... 124 more bytes>
        console.log(data.toString());
        // 通过可写流写入文件的内容。锄禾日当午。通过可写流写入文件的内容。通过可写流写入文件的内容。通过可写流写入文件的内容。

        // 将 data 写入到文件。
        fs.writeFile('hello.jpg', data, function (err) {
            if (!err) {
                console.log('文件写入成功。')
            }
        })
    }
})
