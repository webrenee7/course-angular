//http 核心模块
var http = require('http');
http.createServer(function (req,res) {
    //当请求到来的时候执行
    //req代表的是浏览器端
    //res代表的是服务器端
    //设置响应类型
    res.setHeader('Content-Type','text/plain;charset=utf8');
    res.setHeader('aa',11);
    res.statusCode=404;//301 302
    //res.writeHead(200,{'Content-Type':'text/plain;charset=utf8',aa:1});
    //结束响应res(可写流)
    res.write('helloWorld');
    res.end('你好');
}).listen(80);