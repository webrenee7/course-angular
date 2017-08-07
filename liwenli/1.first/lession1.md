## 框架和(库 vue react)
- 库 提供了很多方法，让我们来调用（主动调用）
- 框架 我们按照他的规范去写，人家调用我们（被动）（强约束）

> 框架的好处，提供完整的解决方案

## MVC MVVM
- model 模型 数据 （从数据库中读取到的内容）
- view  视图 (我们看到的内容)
- controller 控制器 （控制将数据渲染到视图上）

> 当视图内容变化时调用控制器，控制器调用模型，渲染视图

## MVVM
- model 数据
- view 视图
- viewModel 视图模型

> 适合单页（spa框架）面开发

## 下载angular
- 下载nodejs会提供一个叫npm的东西 
- node package manager 
```
npm install angular
```
> 通过npm来下载，别人上传上去的‘包’,默认安装到当前目录的node_modules文件夹中，如果上级目录有node_modules 会安装到上级中

## ng-app
- 让angular用哪个模块来运行，会指定一个模块的名字，会产生一个$rootScope
## ng-model
```
ng-model='name'
```
- 实现双向数据绑定的，当前作用域下没有变量，在当前作用域下声明，如果有变量，将name的值绑定给input标签，（数据影响视图）如果input中内容改变，会改变当前作用域上的（视图影响数据）
## ng-bind
- 和{{}}作用域一样，{{}}是ng-bind的简写，不会导致页面的闪烁
- 1.支持简单的运算
- 2.支持三元运算符
- 3.支持赋值操作

> 标签中的内容会被覆盖掉

## ng-cloak
```
[ng-cloak]{
    display:none
}
```
- 在所有闪烁的标签上增加ng-cloak属性

## 模块化
```
var app = angular.module('moduleName',[]);
```
## 控制器
- 使用控制器
```
<div ng-controller="controlName">{{a}}</div>
```
```
app.controller('controlName',function($scope){
    $scope.a = 1;
})
```
## run方法
```
app.run(function($rootScope){
})
```