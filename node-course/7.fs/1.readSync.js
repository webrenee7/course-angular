//fs file system 是node的一个核心模块
var fs = require('fs');
//文件模块中的方法基本都是同步和异步同时存在
//同步通过返回值接收结果
//读取文件都是默认buffer类型，写文件都是utf8类型,文件不存在报错，同步代码需要try catch捕获异常
var school = {};
var name = fs.readFileSync('./name.txt','utf8');
school.name = name;
var age = fs.readFileSync('./age.txt','utf8');
school.age = age;
console.log(school);
/*
try {
    var result = fs.readFileSync('./name1.txt','utf8');
    console.log(result);
}catch (e){
    console.log(e);
}
*/
