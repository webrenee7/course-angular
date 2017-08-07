/**
 * Created by Administrator on 2017/2/14.
 */
var http=require('http');//创建服务
var url=require('url');//解析路径
var fs=require('fs');//操作文件
var mime=require('mime');//解析文件类型
http.createServer(function (req,res) {
    //当有人访问80端口时会触发此回调函数
    var urlObj=url.parse(req.url,true),
        pathname=urlObj.pathname,
        query=urlObj.query;
    if(pathname=='/'){
        res.setHeader('content-type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);//fs-->可读流  res-》可写流
    }else if(pathname=='/jsonp'){
        var b=query['callback'];
        var json=JSON.stringify({name:"xy",age:8});
        res.end(`${b}(${json})`);
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