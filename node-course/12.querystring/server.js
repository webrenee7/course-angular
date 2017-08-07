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
    }else if(pathname == '/addUser'){
        var str = '';
        req.on('data',function (data) {
            str+=data; //username=zf&password=zfpx1 解析对象 {username:zf,password:zfpx1}   查询字符串
        });
        req.on('end',function () {  //JSON {username:123,password:456}
            //querystring  JSON
            var obj=querystring.parse(str);
            console.log(querystring.stringify(obj));
            var str = 'username=123; password=456';
            //默认是=和&符号 可以自己指定分隔符
            var obj = querystring.parse(str,'; ','=');
            console.log(querystring.stringify(obj,'; ','='));
           /* var reg = /([^=&]+)=([^=&]+)/g;
            var obj = {}
            str.replace(reg,function () {
                obj[arguments[1]] = arguments[2]
            });*/
            //console.log(obj);
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
