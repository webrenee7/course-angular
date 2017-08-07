//this问题
var obj = {
    a:1,
    b:function () {
        setTimeout(()=>{ //箭头函数中没有this指向，从而解决了this问题
            //定时器中的this是setTimeout自己
            console.log(this.a);
        },1000);
    }
};
obj.b();
//1.bind可以改变this指向
/*var a = function (a) {
    return a;
};*/
// const a = (a) => {return a};
const arr = a => a;
console.log(arr(2));
function A() {
    this["+"] = (a,b)=>a+b;
}
var a = new A;

/*function valueFn(value) {return function valueRef() {return value;};}
app.value('Calc',{
    "+": (a,b)=>a+b
});
function value(name, val) { return factory(name, valueFn(val), false); }
factory('Calc',function valueRef() {
    return {
        "+": (a,b)=>a+b
    }
});*/
