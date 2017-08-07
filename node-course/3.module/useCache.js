var cache = require('./cache');
//删除缓存
delete require.cache["C:\\Users\\10354_000\\Desktop\\node13\\3.module\\cache.js"];

var cache = require('./cache');
//console.log(cache);
//同步的将文件读取过来 io操作 进行执行
//require中的缓存，多次引用，先看缓存中是否加载过此模块，加载过不会再继续加载
//console.log(require);
//C:\Users\10354_000\Desktop\node13\3.module\cache.js
