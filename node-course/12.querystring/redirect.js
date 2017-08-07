var http = require('http');
var fs = require('fs');
var url = require('url');
var mime = require('mime');
var querystring = require('querystring');
http.createServer(function (req,res) {
    var pathname = url.parse(req.url,true).pathname;
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./1.form.html').pipe(res);
    }else if(pathname =='/addUser'){
        //取请求头 需要采用小写的方式
        //设置响应头 首字母大写
        console.log(req.headers.cookie);
        var str = '';
        req.on('data',function (data) {
            str+=data;
        });
        req.on('end',function () {
            var name = querystring.parse(str).username;
            //临时重定向
            res.statusCode =302;
            if(name=='admin'){
                res.setHeader('Location','http://www.baidu.com');
            }else{
                res.setHeader('Location','http://www.qq.com');
            }
            res.end();
        })
    }else{
        fs.exists('.'+pathname,function (flag) {
            if(flag){
                res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf8');
                fs.createReadStream('.'+pathname).pipe(res);
            }else{
                res.statusCode = 404;
                res.end('not found');
            }
        })
    }
}).listen(8090);
