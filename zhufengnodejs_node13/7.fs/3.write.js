var fs = require('fs');
//默认写入是utf8格式，写入的内容会被调用 toString方法
//fs.writeFileSync('./1.txt','hello');
fs.writeFile('./1.txt','hello',function (err) {
    console.log(arguments);
});
/*fs.appendFileSync('./1.txt','hello');
fs.appendFile()*/
// 能用异步 绝不用同步，fs.readFile读取到内存中，不能读取比内存大的文件，一般读取64k以下的文件
