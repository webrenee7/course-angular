var b = [100];
var arr = [b,2,3];
//slice方法是浅拷贝
var newArr = arr.slice(0);
b[0] = 200;
console.log(newArr);