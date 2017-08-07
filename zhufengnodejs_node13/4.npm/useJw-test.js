//在node_modules文件夹下的模块 第三方模块 （不使用./引用）

var str = require('jw-test');
console.log(str);
console.log(module.paths);//查找路径
//第三方模块 会从当前模块找起，如果当前不存在向上一级查找，直到根目录位置，再找不到则报错,找到后，查看package.json中的main对应的文件执行
[
'C:\\Users\\10354_000\\Desktop\\node13\\4.npm\\node_modules',
'C:\\Users\\10354_000\\Desktop\\node13\\node_modules',
'C:\\Users\\10354_000\\Desktop\\node_modules',
'C:\\Users\\10354_000\\node_modules',
'C:\\Users\\node_modules',
'C:\\node_modules' ]