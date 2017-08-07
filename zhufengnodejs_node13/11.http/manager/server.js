var http = require('http');
var fs = require('fs');
var url = require('url');
var mime = require('mime');
var users = [{name:'张三',password:123456,id:1},{name:'李四',password:567890,id:2}];
http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathname == '/getUser'){//获取所有用户
        res.end(JSON.stringify(users));
    }else if(pathname == '/delUser'){
        var id =  urlObj.query.id;//要删除的id号
        users = users.filter(function (item) {
            return item.id!=id;
        });
        res.end(JSON.stringify(users));
    }else if(pathname == '/addUser'){
        //读取请求体重的数据 req可读流
        var str = '';
        req.on('data',function (data) {
            str+=data;
        });
        req.on('end',function () {
            var user = JSON.parse(str);
            user.id = users.length?users[users.length-1].id+1:1;
            users.push(user);
            res.end(JSON.stringify(users));
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
        });
    }
}).listen(3000);
