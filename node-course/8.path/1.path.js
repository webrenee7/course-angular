//path是一个核心模块
var path = require('path');
//join拼接   resolve解析成绝对路径
var str = '../a/b/c'; //__dirname
console.log(path.join(__dirname,str));
var str = 'a';
console.log(path.resolve(str));
//获取绝对路径 resolve，join