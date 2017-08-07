// 后台中的全局对象 global
//console.log(this); //{} 外面套了一个闭包,将this指向改变了
(function () {
    console.log(this);
})();
//process 进程对象
//Buffer 缓存区
//clearImmediate 清除立即
//setImmediate
//clearInterval
//setInterval: [Function],
//clearTimeout: [Function],
//setTimeout: [Function],
//console

//1.console
// console.log('日志');
// console.error('错误');
// console.warn('警告');
// console.info('信息');
// //time 和timeEnd中的参数名要相同
// console.time('start');
// for(var i = 0; i < 1000000000;i++){}
// console.timeEnd('start');
// console.time();
// console.timeEnd();

//2.setTimeout 是一个异步的方法  服务员的第二个小本上
// setTimeout(function () {
//    console.log(this); //this指向的是setTimeout自己
// });
function hungry(foods,fruit) {
    console.log(foods,fruit);
}
setTimeout(hungry,1000,'苹果','香蕉');

