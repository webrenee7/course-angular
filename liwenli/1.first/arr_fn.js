// push 增  filter 删  map 改 find  查找

// 增加
//arr.push({id:5,name: 'webpack'});

// id=4 filter删 return成立的每一项 组成一个新数组 原数组不改变
//var newArr = arr.filter(function(item){
//      return item.id != 4
//});
//console.log(arr);
//console.log(newArr);

// map id=2 {id:2,name:'gulp'} 匹配的那一项 就会改为我们return 后面的值（不配的照常返回） 组成新数组 原数组不变
//newArr = arr.map(function (item) {
//     if(item.id === 2) {
//         return {id:2,name:'gulp'}
//     }
//    return item;
//});
//console.log(arr);
//console.log(newArr);
// find 查找 id=3  返回的是数组里查找到的那一项 但不是新数组 原数组不改变
//var obj = arr.find(function (item) {
//     return item.id === 0
//});
//console.log(arr);
//console.log(obj);

var arr = [
    {id:1, name:'angular'},
    {id:2, name: 'node'},
    {id:3, name: 'react'},
    {id:4, name: 'vue'}
];
// {id:2, name: 'node'}

arr = arr.filter(function (item) {
      return item.id != 2
});
console.log(arr);