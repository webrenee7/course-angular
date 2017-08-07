//核心模块
var util = require('util');
//继承、判断数据类型

//原型继承
function Parent() {
    this.cry = '哭'
}
Parent.prototype.eat = function () {
    console.log('吃饭');
};
function Child() {
    this.smile='笑'
}
//原型链继承 只继承原型的
//Child.prototype.__proto__ = Parent.prototype;
//Child.prototype = Object.create(Parent.prototype);
//Object.setPrototypeOf(Child.prototype,Parent.prototype);
//new Parent / call / extends
util.inherits(Child,Parent);//如果想到node中的继承util 只继承原型
var child = new Child();
console.log(child.cry);
child.eat();

//判断方法
console.log(util.isArray([]));