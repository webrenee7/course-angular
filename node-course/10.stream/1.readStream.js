var fs = require('fs');//file system
//读取的文件必须要存在,读取是null->buffer
var rs = fs.createReadStream('./1.txt',{highWaterMark:1});
//监听data事件 数据会自动读取过来 ,          每次读取一个字节
var arr = [];
rs.on('data',function (data) { //相当于打开了水管，水会不停的流入，直到流干了为止
    arr.push(data);
    rs.pause();//没有读完文件是不会触发end事件的
    setTimeout(function () {
        rs.resume();//恢复data事件的触发
    },1000);
});//emit('data',读取到的数据);
rs.on('end',function () {
    console.log(Buffer.concat(arr).toString());//打印结果
});
//暂停  恢复
rs.on('error',function (err) {//监听错误
   console.log(err);
});
//on('data') on('end') on('error') rs.resume() rs.pause();

