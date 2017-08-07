## ng-app="zfModule"
- 启动angular项目的,zfModule表示通过模块来启动项目,会产生一个根作用域（全局作用域），会调用angular中的run方法

## ng-model
- 适用范围：表单元素，具体指input select radio checkbox textarea
实现双向数据绑定 ng-model="name", 如果作用域上有name变量会将name变量放到输入框中 MVVM M->V,如果没有则会在作用域上声明这个数据，如果更改数据会导致作用域上的数据发生变化。

## ng-bind/{{}}
- 可以将作用域上的值取出来
- 可以赋值 ，可以做运算，可以做三元表达式

## ng-cloak
放置闪烁一片
```
[ng-cloak]{display:none}
```

## ng-controller 
代表的是控制器，可以通过创建控制器产生独立的作用域，(function)
```
app.controller('myCtrl',['$scope',function($scope){}])
```

### 特点
- 独立作用域,子继承父，父不能继承子
- 控制器可以嵌套着写(嵌套带有ng-controller的html标签)
- 控制器的作用范围和标签平齐
- 不要在控制器中操作dom X

## 对象 数组 ng-repeat
```
$scope.arr = [1,2,3]
$scope.obj = {name:'zfpx'}
```
```
<ul>
    <li ng-repeat="(key,value) in obj track by $index">
        {{value}}{{$index}} {{$odd}}  {{$even}} {{$first}} {{$last}} {{$middle}}
    </li>
</ul>
```

## 函数
- {{fn()}} 将执行的结果展示到页面上
```
$scope.fn = function(){
    return value
}
```
- ng-click(ng-事件名)
```
<div ng-click="fn($event)"></div>
```

## 表单属性
```
ng-disabled ng-readonly
```

## ng-if/ng-show/ng-hide
- ng-show/ng-hide操作dom元素的隐藏或显示(none/block)
- ng-if (removeChild/appendChild),会产生作用域

> 频繁切换用show ，用来判断数据是否存在,如果外层不存在内层代码不执行（判断数组存不存在arr.length）

## ng-class/ng-style
- ng-class和原生的class不冲突
```
<div class="className3" ng-class="{'className1':true,'className2':false}"></div>
<div ng-class="{true:'className1',false:'className2'}[flag]"></div>
<div ng-style="{fontSize:'40px',backgroundColor:'red'}">
```

## 过滤器
### 内置过滤器
- 不会改变原数据，只是改变展示方式
```
{{'abcd' | uppercase}}
{{'ABCD' | lowercase}}
{{100000 | number}}
<pre>{{ {name:1} | json:4}}</pre>
{{1486437459166 | date:'yy-MM-dd hh时mm分ss秒'}}
{{100 | currency:'£'}}
{{'欢迎你来xxx' | limitTo:3}}
{{[{name:1},{name:3},{name:2}] | orderBy:'name':true}}是否倒序
{{[{name:1},{name:3},{name:2}] | filter:3}}
```

### 自定义过滤器
过滤器和控制器没有关系，过滤器和控制器的声明方式是平齐的通过模块创建
```
app.filter('myFilter',function(){
    return function(){
        return '结果'
    }
})
```

## $sce编译html数据
```
<div ng-bind-html='str'></div>
app.controller('myCtrl',function($scope,$sce){
    $scope.str = $sce.trustAsHtml('<h1>1</h1>')
})
```

## 抽取编译html代码
```
<div ng-bind-html="str | asHtml">
app.filter('asHtml',function ($sce) {
    return function (data) {
        return $sce.trustAsHtml(data);
    }
});
``` 