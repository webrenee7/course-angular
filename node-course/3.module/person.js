console.log(this);
//在文件中直接访问this 是{}，一个文件外面包含了一个闭包函数
console.log(__filename);
console.log(__dirname);
//形参可以直接访问到，文件目录不能发生改变
var school = {name:'zfpx',age:8};
module.exports = school;
/*
在exports上增加属性可以导致module.exports的变化，但是更改exports的地址不会导致module.exports的变化，最终导出的是module.exports
1.在exports上增加属性             导出多个
2.直接更改module.exports的引用地址 导出唯一的一个
* (function(require,exports,module,__filename,__dirname){
*   module.exports = exports = {}
*   module.exports = school;
*   return module.exports;
*
* })
*
* */