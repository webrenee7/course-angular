## watch + apply
- watch监控数据变化
```
$scope.$watch('name',function(newVal,oldVal){});
$scope.$watch(function(){return result},function(newVal,oldVal){})
```
- apply应用数据，刷新视图
原生的js中操作作用域上的数据,是不会刷新视图的，自带的指令和服务自动刷新视图
```
$scope.$apply()
```

> 双向数据绑定指令

## $http,$interval,$timeout
```
$http.jsonp($sce.trustAsResourceUrl('url'),{jsonpCallbackParam:'cb'}).then(success,err);
``` 

## 自定义服务
- 单例 共用（$rootScope）
- provider factory service value constant
    - provider 最大的服务，并且可以配置
        ```
            app.config(function(MyProvider){
                MyProvider.aa = 200;
            })
            app.provider('My',function(){
                this.aa = 100;
                this.$get = function(){
                    return {name:1}
                }
            })
        ```
    - factory 声明后是一个$get函数
        ```
            app.factory('My',function(){
                return {name:1,age:8}
            })
        ```
    - service 是factory返回值的构造函数
        ```
            app.service('My',function(){
                this.name = 1;
                this.age= 9;
            })
        ```
    - value 是factory返回的值 constant同value用法
        ```
            app.value('My',{name:1,age:8})
        ```