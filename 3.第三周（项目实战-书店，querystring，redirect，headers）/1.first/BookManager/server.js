/**
 * Created by Administrator on 2017/2/14.
 */
var http=require('http');
var url=require('url');
var fs=require('fs');
var mime=require('mime');
var books=[
    {name:'angular权威指南',price:30,id:1},
    {name:'react全栈技术',price:40,id:2},
    {name:'react权威指南',price:70,id:3}
];
http.createServer(function (req,res) {
    var urlObj=url.parse(req.url,true),
        pathname=urlObj.pathname,
        query=urlObj.query;
    if(pathname=='/'){
        res.setHeader('content-type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(/^\/book(\/\d+)?$/.test(pathname)){//   book/     /book/1
        var id=/^\/book(\/\d+)?$/.exec(pathname)[1];//取出分组中的内容，没有就是undefined，有就是/100
        //req.method;///当前请求的方法  GET查  PUT改  DELETE删  POST增  大写的
        switch (req.method){
            case "GET":
                if(id){
                    //查询一个
                    id=id.slice(1);
                    /*books.forEach(function (item) {

                     });*/
                }else{
                    //查询所有
                    res.setHeader('content-type','aplication/json;charset=utf8');
                    res.end(JSON.stringify(books));
                }
                break;
            case "PUT":
                break;
            case "DELETE":
                if(id){ //   /100
                    id=id.slice(1);
                    books=books.filter(function (item) {
                        return item.id!=id;
                    });
                    res.end(JSON.stringify({}));
                }
                break;
            case "POST":
                var passData='';
                req.on('data',function (data) {
                    passData+=data;
                });
                req.on('end',function () {
                    var book=JSON.parse(passData);
                    book.id=books.length==0?1:books[books.length-1].id+1;
                    books.push(book);
                    res.end(JSON.stringify(book));
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
                res.end("not found");
            }
        });
    }
}).listen(80);