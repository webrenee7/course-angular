var arr = [{name:1},{name:2},{name:3},{name:3}];
var a = 4;
//item代表的是{name:3} 找到后不会继续查找
var item = arr.find(function (item) {
    return item.name == a;
})
console.log(item);
