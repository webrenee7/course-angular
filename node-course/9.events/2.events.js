var EventEmitter = require('events');
var util = require('util');
function Man() {}
util.inherits(Man,EventEmitter);//子继承父的原型上的方法
var man = new Man();
function learnBad(who) {
    console.log(who+'learnBad');
}
function findGirls(who) {
    console.log(who+'找女朋友');
}
man.once('有钱',learnBad); //{有钱：[learnBad]}
//绑定一次 执行后再数组中移除掉
man.removeAllListeners('有钱');//删除全部监听
man.emit('有钱','张三');
man.emit('有钱','张三');
man.emit('有钱','张三');
man.emit('有钱','张三');
// on = addListener
// emit
// once//先绑定 执行后删除 多次执行只触发一次
// removeListener removeAllListeners


