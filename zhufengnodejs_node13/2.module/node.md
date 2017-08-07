## nrm源切换
## npm 
node package manager 管理后台的 

## 如何安装包 和 卸载包
初始化一个pacakge.json文件，记录文件依赖
```
npm init -y
```

## 记录依赖

- 项目依赖
    - 上线的时候仍然需要 angular jquery
    
    ```
    npm install jquery --save或者;
    ```
- 开发依赖
    - 上线时不需要 gulp
    
    ```
    npm install gulp --save-dev或者-D
    ```

## 安装使用的依赖
```
npm install 
```

## 删除模块
```
npm uninstall gulp --save-dev
```

## bower 管理前端框架的
文件夹不能大写，而且不能有中文 特殊符
```
npm install bower -g
```
- 生成bower.json
```
bower init
```
- 安装模块
```
bower install jquery --save
bower install gulp --save-dev
```

> 默认安装到bower_components

## 安装所有bower文件
```
bower install 
```

## 指定目录安装文件
```
touch .bowerrc 
{"directory":"lib/js"}
```

## 显示版本号
```
npm info jquery
bower info jquery
```

## bower安装指定版本
```
bower install jquery#3.0.0 --save

```

## npm安装制定版本
```
npm install jquery@3.0.0 --save
```