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
        var passData='';
        req.on('data',function (data) {
            passData+=data;
        });
        req.on('end',function () {
            // console.log(passData);//username=zfpx&&password=1234;
            /*var reg=/([^?=#&]+)=([^?=#&]+)/g;
             var obj={};
             passData.replace(reg,function () {
             obj[arguments[1]]=arguments[2];
             });
             console.log(obj);*/
            //表单提交的数据两种形式  json  querystring
            var res=querystring.parse(passData);
            console.log(querystring.stringify(res));

            var str='name=xy; password=234';
            var obj=querystring.parse(str,'; ','=');//分隔符默认是=和&符号，我们可以自己指定分隔符
            querystring.stringify(obj,'; ','=');
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
}).listen(8090);
