var http = require('http');
var fs = require('fs');
var url = require('url');
var mime = require('mime');
function readBooks(callback) {
    fs.readFile('./book.json','utf8',function (err,data) {
        if(err || data == ''){
            data = '[]'
        }
        data = JSON.parse(data);
        callback(data);
    });
}
function writeBooks(data,callback) {
    fs.writeFile('./book.json',JSON.stringify(data),callback);
}

http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset="utf8"');
        fs.createReadStream('./index.html').pipe(res);
    }else if(/^\/book(\/\d+)?$/.test(pathname)){  // /book  /book/12312
        var id = /^\/book(\/\d+)?$/.exec(pathname)[1];  //  /12312
        switch (req.method){
            case 'GET':
                if(id){ // /100
                    id = id.slice(1);
                    readBooks(function (data) {
                        //找到后停止 不继续查找
                        var book = data.find(function (item) {
                            return item.id ==id; //返回true则会把这个item返回到外面
                        });
                        res.end(JSON.stringify(book));
                    });
                }else{
                    //读取所有图书
                    readBooks(function (data) {
                        res.end(JSON.stringify(data));
                    });
                }
                break;
            case 'POST':
                var str = '';
                req.on('data',function (data) {
                    str+=data;
                });
                req.on('end',function () {
                    var book = JSON.parse(str);
                    readBooks(function (data) {
                        book.id = data.length?data[data.length-1].id+1:1;
                        data.push(book);
                        writeBooks(data,function () {
                            res.end(JSON.stringify(book));
                        });
                    });
                });
                break;
            case 'PUT':
                if(id){
                    id = id.slice(1);
                    var str = '';
                    req.on('data',function (data) {
                        str+=data;
                    });
                    req.on('end',function () {
                        var book = JSON.parse(str);
                        readBooks(function (data) {
                            data = data.map(function (item) {
                                if(item.id == id){
                                    return book;
                                }
                                return item;
                            });
                            writeBooks(data,function () {
                                res.end(JSON.stringify(book));
                            })
                        })
                    });
                }
                break;
            case 'DELETE':
                if(id){
                    id = id.slice(1);
                    readBooks(function (data) {
                        data = data.filter(function (item) {
                            return id!=item.id;
                        });
                        writeBooks(data,function () {
                            res.end(JSON.stringify({}));
                        });
                    });
                }
                break;
        }
    }else{
        fs.exists('.'+pathname,function (flag) {
            if(flag){
                res.setHeader('Content-Type',mime.lookup(pathname)+';charset="utf8"');
                fs.createReadStream('.'+pathname).pipe(res);
            }else{
                res.statusCode = 404;
                res.end();
            }
        });
    }
}).listen(3000);