/**
 * Created by Administrator on 2017/2/15.
 */
var http=require('http');
var fs=require('fs');
var url=require('url');
var mime=require('mime');
function readBooks(callback) {
    fs.readFile('./book.json','utf8',function (err,data) {
        if(err||data==''){
            data='[]';
        }else{
            data=JSON.parse(data);
            callback(data);
        }
    })
}
function writeBooks(data,callback) {
    fs.writeFile('./book.json',JSON.stringify(data),callback);
}
http.createServer(function (req,res) {
    var urlObj=url.parse(req.url,true);
    var pathname=urlObj.pathname;
    var query=urlObj.query;
    if(pathname=='/'){
        res.setHeader('content-type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(/^\/book(\/\d+)?$/.test(pathname)){
        var id=/^\/book(\/\d+)?$/.exec(pathname)[1];
        switch (req.method){
            case "GET":
                if(id){
                    id=id.slice(1);
                    readBooks(function (data) {
                        var book=data.find(function (item) {
                            return item.id==id;
                        });
                        res.end(JSON.stringify(book));
                    });
                }else{
                    readBooks(function (data) {
                        res.end(JSON.stringify(data));
                    });
                }
                break;
            case "DELETE":
                if(id){
                    id=id.slice(1);
                    readBooks(function (data) {
                        data=data.filter(function (item) {
                            return item.id!=id;
                        });
                        writeBooks(data,function () {
                            res.end(JSON.stringify({}));
                        });
                    });
                }
                break;
            case "PUT":
                if(id){
                    id=id.slice(1);
                    var passData='';
                    req.on('data',function (data) {
                        passData+=data;
                    });
                    req.on('end',function () {
                        var book=JSON.parse(passData);
                        readBooks(function (data) {
                            data=data.map(function (item) {
                                if(item.id==id){
                                    return book;
                                }else{
                                    return item;
                                }
                            });
                            writeBooks(data,function () {
                                res.end(JSON.stringify(book));
                            });
                        });
                    });
                }
                break;
            case "POST":
                var passData='';
                req.on('data',function (data) {
                    passData+=data;
                });
                req.on('end',function () {
                   var book=JSON.parse(passData);
                    readBooks(function (data) {
                        book.id=data.length==0?1:data[data.length-1].id+1;
                        data.push(book);
                        writeBooks(data,function () {
                            res.end(JSON.stringify(book));
                        })
                    });
                });
                break;
        }
    }else{
        fs.exists('.'+pathname,function (flag) {
            if(flag){
                res.setHeader('content-type',mime.lookup(pathname)+';charset=utf8');
                fs.createReadStream('.'+pathname).pipe(res);
            }else{
                res.statusCode=404;
                res.end('not found!');
            }
        });
    }
}).listen(80,function () {
    console.log('监听80端口成功！')
});