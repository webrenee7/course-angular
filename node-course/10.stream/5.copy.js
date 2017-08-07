var fs = require('fs');
// 可读流 读64 写 16k 读64都消耗完你在去读64
function copy(source,target) {
    var rs = fs.createReadStream(source);
    var ws = fs.createWriteStream(target);
    rs.pipe(ws); //可读流->可写流中
}
copy('./1.txt','./2.txt');
//读一点写一点，防止淹没可用内存，readFile  pipe,查看读取到的内容用readFile，不关心读到的内容用pipe