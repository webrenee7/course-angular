var fs = require('fs');
// 可读流 读64 写 16k 读64都消耗完你在去读64
function pipe(source,target) {
    var rs = fs.createReadStream(source,{highWaterMark:5});
    var ws = fs.createWriteStream(target,{highWaterMark:1});
    //1.先读一次 rs.on('data')  看ws.write()的返回值，返回false
    rs.on('data',function (data) {
        var flag = ws.write(data);
        //2.停止读取 rs.pause();
        if(!flag){
            rs.pause();
        }
    });
    //3.ws.on('drain'); 监控当前的都消化后继续读 rs.resume();
    ws.on('drain',function () {
        console.log('抽干了');
        rs.resume();
    });
    //4.rs.on('end')读完后，调用关闭方法ws.end();(会将内存中全部写入在关掉);
    rs.on('end',function () {
        ws.end();
    });
}
pipe('./1.txt','./2.txt');