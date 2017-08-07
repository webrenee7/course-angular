var fs = require('fs');
//回调中 如果需要错误则第一个参数为err对象 error first
var school = {};
fs.readFile('./name.txt','utf8',function (err,data) {
    if(err)console.log(err);
    school.name = data;
    out();
});
fs.readFile('./age.txt','utf8',function (err,data) {
    if(err)console.log(err);
    school.age = data;
    out();
});
function out() {
    if(Object.keys(school).length==2){ //会将对象的属性转换成数组
        console.log(school);
    }
}

