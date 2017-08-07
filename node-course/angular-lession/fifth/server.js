var http = require('http');//创建服务的
var url = require('url');//解析路径
var fs = require('fs');//操作文件
var mime = require('mime'); //解析文件类型 /index.css => text/css
http.createServer(function (req,res) {
    //当有人访问8080端口时 会触发此回调函数
    // /?a=1 req.url   /后面的和?前面的
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset="utf8"');
        fs.createReadStream('./index.html').pipe(res);
    }else{ //   /index.css  
        fs.exists('.'+pathname,function (flag) {//判断文件是否存在
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