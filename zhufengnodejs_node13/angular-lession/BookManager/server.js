var http = require('http');
var url = require('url');
var fs = require('fs');
var mime = require('mime');
var books = [
    {name:'angular权威指南',price:30,id:1},
    {name:'react全栈技术',price:80,id:2},
    {name:'vue权威指南',price:70,id:3},
];
http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset="utf8"');
        fs.createReadStream('./index.html').pipe(res);
    }else if(/^\/book(\/\d+)?$/.test(pathname)){ // /book  /book/100
        var id = /^\/book(\/\d+)?$/.exec(pathname)[1];//取出分组中的内容，没有就是undefined 如果有就是 /100
        switch (req.method){//当前请求的方法 GET PUT DELETE POST(大写的)
            case 'GET':
                if(id){

                }else{//查询所有
                    res.setHeader('Content-Type','application/json;charset="utf8"');
                    res.end(JSON.stringify(books));
                }
                break;
            case 'POST':
                var str = '';
                req.on('data',function (data) {
                    str+=data;
                });
                req.on('end',function () {
                    var book = JSON.parse(str);//拿到前台传过来的这本书 给其增加id
                    book.id = books.length?books[books.length-1].id+1:1;
                    books.push(book);
                    res.end(JSON.stringify(book));
                });
                break;
            case 'PUT':
                break;
            case 'DELETE':
                if(id){ // /100
                    id = id.slice(1);
                    books = books.filter(function (item) {
                        return item.id != id;
                    });
                    res.end(JSON.stringify({}));
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
}).listen(8080);