var http = require('http');
var fs = require('fs');
var url = require('url');
var mime = require('mime');//可以通过后缀名得出content-Type
http.createServer(function (req,res) {
    var pathname = url.parse(req.url,true).pathname;
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else{
        //mime提供了所有的类型
        //判断文件是否存在 存在在进行读取
        fs.exists('.'+pathname,function (flag) {
            if(flag){ //文件存在则读取 不存在404
                res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf8');
                fs.createReadStream('.'+pathname).pipe(res);
            }else{
                res.statusCode = 404;
                res.end('not found');
            }
        })

    }
   /* else if(pathname == '/index.css'){
        res.setHeader('Content-Type','text/css;charset=utf8');
        fs.createReadStream('./index.css').pipe(res);
    }else if(pathname == '/index.js'){
        res.setHeader('Content-Type','text/css;charset=utf8');
        fs.createReadStream('./index.js').pipe(res);
    }
    else{
        res.statusCode = 404;
        res.end('not found');
    }*/
    console.log(req.url); // /favicon.ico浏览器默认请求


}).listen(80);

//res.statusCode=200;
//同步 大的文件不能分段读取
/*var result = fs.readFileSync('./index.html');
 res.end(result);*/