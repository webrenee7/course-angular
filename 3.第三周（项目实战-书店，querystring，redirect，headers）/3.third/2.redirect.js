/**
 * Created by Administrator on 2017/2/16.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');
var mime = require('mime');
var querystring=require('querystring');
http.createServer(function (req,res) {
    var pathname = url.parse(req.url,true).pathname;
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./form.html').pipe(res);
    }else if(pathname=='/addUser'){
        console.log(req.headers.cookie);//取请求头，必须小写
        var passData='';
        req.on('data',function (data) {
            passData+=data;
        });
        req.on('end',function () {
           var name=querystring.parse(passData).username;
            // console.log(name);
            //临时重定向
            res.statusCode=302;//必须设置相应状态码
            if(name=='admin'){
                res.setHeader('Location','http://www.baidu.com');//设置请求头，一般首字母大写
            }else{
                res.setHeader('Location','http://www.qq.com');
            }
            console.log(req);
            res.end();
        });
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
}).listen(80);
