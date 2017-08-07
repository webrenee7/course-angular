//setImmediate 立即 异步方法 在服务员的第二个小本上
setImmediate(function () {
    console.log('立即');
});
setTimeout(function () {
    console.log('timeout');
},0);
//下一队列 异步的
process.nextTick(function () {
    console.log('下一队列');
});
console.log('哈哈');
//在立即前可以先执行setTimeout setImmediate来取代setTimeout写0的时候

//1.同步 2.process.nextTick当前队列的底部
//3.setTimeout>=setImmediate 读写

