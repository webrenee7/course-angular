## 初始化
```
npm init -y
```
## 安装依赖的模块
```
npm install angular angular-resource bootstrap mime --save
```

## 复习：jsonp原理
利用script标签的可跨域请求特点，动态创建script标签，并且告诉后台全局下哪个函数要被执行
```
var script=document.createElement('script');
script.src="http://localhost/jsonp?callback=cb";
document.body.appendChild(script);
function cb(data) {
    console.log(data);
}
```

```
if(pathname=='/jsonp'){
    var b=query['callback'];
    var json=JSON.stringify({name:"xy",age:8});
    res.end(`${b}(${json})`);
}
```
