## nodejs遵循commonjs规范
- 如何创建一个模块(1个js文件就是一个模块)
- 如果导出模块 exports /module.exports
- 依赖别人的模块 require()

## module.exports和exports区别
```
module.exports = exports = {}
return module.exports;
```
- 使用方式
```
exports.calc = calc; √
module.exports.calc = calc; √
module.exports = calc; √
```

## 模块的缓存
- 引用同一个模块，只会加载一次
```
delete require.cache['绝对路径'] 删除缓存
```

> 通过绝对路径缓存 保证唯一性

## npm安装后台模块的
- 初始化package.json
```
npm init -y
```
- 全局安装
```
npm install less -g
```

> 只在命令行下使用

- 本地安装
    - 开发依赖
        ```
            npm install babel-core --save-dev(简写-D)
        ```
    - 项目依赖
        ```
             npm install mime --save(简写-S)
        ```
> 代码里需要用到

- 卸载
```
npm uninstall mime --save
npm uninstall gulp -g
```

## nrm源切换
在中国访问中国的进行下载 
```
npm install nrm -g
```
- 查看源列表
```
nrm ls
```
- 添加珠峰为切换的源
```
nrm add zhufeng http://172.18.0.199/
```
- 使用珠峰
```
nrm use zhufeng //回家后 切到别的源上
```

## bower安装前台的模块的

## 发布包
- package.json
```
npm init -y  //name不能存在过
```
- 使用npm的网
```
nrm use npm
```
- 注册账号，有账号表示登陆
```
npm addUser
```
- 发布
```
npm publish
```
