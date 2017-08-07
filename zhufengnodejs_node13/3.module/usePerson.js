var school = require('./person.js');
//school不是exports对象，是module.exports对象
console.log(school.name);
//引用自己写的文件 要通过相对路径 文件模块
//require是同步方法，有返回值的是同步，有回调函数是异步