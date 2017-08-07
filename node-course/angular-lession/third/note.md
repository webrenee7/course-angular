## npm
```
$ npm init -y
```
## 安装
```
$ npm install angular bootstrap --save
``` 

> 安装到当前目录下的node_modules文件

## 指令
- 装饰型指令(link函数)给标签赋予功能，red drag
- 组件式(会有模板)

## 声明指令
```
//默认不会产生任何作用域
app.directive('direName',function(){
    return {
        require:'^?group', //^表示当前找不到则向上一级找，找不到则报错？找不到则不报错，注入进来的东西是null
        controller:function($scope){},
        restrict:'EA',//限制替换的范围 
        template:'',//要替换的模板/templateUrl:'tmpl/open.html'
        replace:false,//不替换外部的标签
        transclude:true,//保留指令中的内容插入到带有ng-transclude的标签中
        link:function(scope,element,attrs,ctrl){ //操作dom元素 
            //scope当前指令所在的作用域，自己没有作用域则向上查找
            //element jq对象（angular内置的），jquery要引入到angular之前，angular发现自己加载过了jquery，就不会加载自己的jquery了
            //attrs 当前指令所有属性的集合
            //ctrl代表的就是当前依赖的指令的控制器的实例
        },
        scope:{
            title:'@',//通过属性传递 获取的是属性对应的字符串
            name:'=n',//通过属性传递 获取的是属性对应作用域上的变量 
            fn:'&say' //通过属性传递一个方法，必须以对象的方式传递 say({n:1});
        }/true
        //1.{} 完全和父作用域断绝关系
        //2.true 产生作用域但是不断绝作用域的关系
    }
});
```