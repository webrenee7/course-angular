/**
 * Created by Administrator on 2017/2/15.
 */
//获取所有图书
//获取到返回获取到的图书信息
//获取不到返回空数组
var fs=require('fs');
/*fs.readFile('./book.json','utf8',function (err,data) {
    if(err){
        data='[]';
    }
    data=JSON.parse(data);
    // console.log(data)
});

//增加图书
//读--》push--》写入
var book={"bookName":"angularJS权威指南","bookPrice":30,"bookCover":"http://","id":1};
var fs=require('fs');
fs.readFile('./book.json','utf8',function (err,data) {
    if(err){
        data='[]';
    }
    data=JSON.parse(data);
    data.push(book);
    fs.writeFile('./book.json',JSON.stringify(data),function (err) {});
});*/

//修改图书
//读--》改--》写入

//封装读和写的方法
var book={"bookName":"angularJS权威指南","bookPrice":30,"bookCover":"http://","id":2};
function readBooks(callback) {
    fs.readFile('./book.json','utf8',function (err,data) {
        if(err){
            data='[]';
        }
        data=JSON.parse(data);
        callback(data);
    });
}
function writeBooks(data,callback) {
    fs.writeFile('./book.json',JSON.stringify(data),callback);
}
/*readBooks(function (data) {
    data.push(book);
    writeBooks(data,function () {
        console.log('写入成功！');
    });
    // fs.writeFile('./book.json',JSON.stringify(data),function (err) {});
});*/

//删除图书 filter  删除id为2的那一项
readBooks(function (data) {
    data=data.filter(function (item) {
        return item.id!=2;
    });
    writeBooks(data,function () {
        console.log('删除成功！');
    });
});


//修改图书  map