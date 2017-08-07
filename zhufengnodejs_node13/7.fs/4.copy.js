//copy方法 克隆文件
var fs = require('fs');
//同步拷贝 readFileSync+writeFileSync
function copySync(source,target) {
    var data = fs.readFileSync(source);
    fs.writeFileSync(target,data);
}
//异步拷贝 readFile+writeFile
function copy(source,target) {
    fs.readFile(source,function (err,data) {
        if(err)console.log(err);
        fs.writeFile(target,data,function () {})
    });
}
copy('./age.txt','./age2.txt');