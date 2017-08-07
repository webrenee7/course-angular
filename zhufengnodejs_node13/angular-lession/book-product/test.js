//book.json存放着所有书
var fs = require('fs');
//获取所有图书
//如果没有书 返回一个空的数组
/*fs.readFile('./book.json','utf8',function (err,data) {
    if(err){
        data="[]"; //如果没有 则返回空数组
    }
    data = JSON.parse(data);
});*/
// [{"bookName":"angular","bookPrice":30,"bookCover":"http://","id":1}]
//增加图书 push
var book = {"bookName":"vue","bookPrice":40,"bookCover":"http://","id":2};
//先读 读出来push 之后再写入
function readBooks(callback) {
    fs.readFile('./book.json','utf8',function (err,data) {
        if(err || data =='') { 
            data = '[]'
        }
        data = JSON.parse(data);
        callback(data);
    });
}
function writeBooks(data,callback) {
    fs.writeFile('./book.json',JSON.stringify(data),callback)
}
/*readBooks(function (data) { //data是读出来的内容
    data.push(book);
    writeBooks(data,function () {
        console.log('写入成功');
    })
});*/
//删除图书 filter  删除id为2的那一项
readBooks(function (data) {
    data = data.filter(function (item) {
        return item.id != 2
    });
    writeBooks(data,function () {
        console.log('删除成功');
    });
});
//修改图书 map


