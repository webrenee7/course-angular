## Buffer(16进制)
- 三种创建的方式
```
var buffer = new Buffer(3);
var buffer = new Buffer([1,2,3]);
var buffer = new Buffer("珠峰")
```
- slice,forEach,[0]
slice克隆的是地址，不会产生新的buffer

- copy将小buffer拷贝到大buffer上
```
将要拷贝的buffer.copy('大buffer',大buffer的起始位置,小buffer的起始位置,小buffer的结束为止)
```

- concat拼接buffer
```
Buffer.concat([buffer1,buffer2,buffer3],totalLength);
```

## fs
- readFile,readFileSync
```
var fs = fs.readFileSync('path','utf8'); //同步
fs.readFile('path',function(err,data){}) //异步
```
- writeFile,writeFileSync
```
fs.writeFileSync('path',data);
fs.writeFile('path',data.function(err){})
```

> appendFile appendFileSync {flag:'a'}

- mkdir,mkdirSync
```
fs.mkdirSync('目录名')
fs.mkdir('目录名',function(err){});
```

- exists,existsSync
```
var flag = fs.existsSync('目录名') //boolean true/false
fs.exists('目录名',function(flag){});
``` 