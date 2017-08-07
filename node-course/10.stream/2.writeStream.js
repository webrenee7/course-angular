var fs = require('fs');
//可写流 highWaterMark 16k
//写默认是uf8格式
var ws = fs.createWriteStream('./1.txt',{highWaterMark:1});
ws.write('1'); //写入和flag是没有关系的，一定会写进去
ws.write('2'); //每次吃完喂我，.on("drain")


//写一共就有两个方法  write end
/*var flag = ws.write("1",function () {
    console.log('1写入');
});//放buffer或者字符串 可以多次写入*/
//console.log(flag);//将这个数据读到内存中，内存是否满了
//ws.end("3");//强迫嘴合上，在让你写个3，在end后就不能再write了
