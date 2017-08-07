var fs = require('fs');
//写10个数
var ws = fs.createWriteStream('./1.txt',{highWaterMark:1});
var index = 0;
function write() {
    var flag = true;//默认表示能吃的状态
    while (index<10&&flag){ //如果<10 并且能吃 在写
        flag = ws.write(index+++''); //返回是否能吃
    }
}
write();
ws.on('drain',function () { //吃完了 继续写
    console.log('吃完了');
    write();
});


