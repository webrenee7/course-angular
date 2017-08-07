//一对多的关系 订阅事件on 发布事件emit 关闭订阅off事件

function Man() {
    this._events = {}; //{'有钱':[bad,girlFriend]}
}
Man.prototype.on = function (eventName,callback) {
    //1.先查看是否是第一次放进去，如果是 {'有钱':[bad]}
    if(this._events[eventName]){
        //不是第一次
        this._events[eventName].push(callback);
    }else{
        //第一次
        this._events[eventName] = [callback];
    }
};
Man.prototype.emit = function (eventName,...args) {//扩展运算符 可以将其与的参数以数组的形式存起来
    //var args = [].slice.call(arguments,1);
    if(this._events[eventName]){ //找到对应的关系 让其执行
        this._events[eventName].forEach((cb)=>{
            cb.apply(this,args);
        });//forEach第二个参数就是改变this指向
    }
};
Man.prototype.off = function (eventName,callback) {//{'有钱':[bad,girlFriend]}
    if(this._events[eventName]){
        this._events[eventName] = this._events[eventName].filter(function (item) {
            return callback!=item;//返回false表示不要了
        });
    }
};
var man = new Man();
function bad(who,who1) {
    console.log(who+'学坏'+who1);
}
function girlFriend(who,who1) {
    console.log(who+'找女朋友'+who1);
}
man.on('有钱',bad);
man.on('有钱',girlFriend); //{'有钱':[bad,girlFriend]}
man.off('有钱',bad);//取消事件
man.emit('有钱','张三','李四');

