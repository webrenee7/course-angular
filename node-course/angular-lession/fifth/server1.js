var http = require('http');
var url = require('url');
var fs = require('fs');
var mime = require('mime');
http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset="utf8"');
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathname == '/jsonp'){
        var b = urlObj.query.callback;
        var json = JSON.stringify({name:1,age:2}); //cb(json)
        //res.end(b+'('+json+')');
        res.end(`${b}(${json})`);
    }else if(pathname == '/getUser'){
        res.end(JSON.stringify({name:1}))
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