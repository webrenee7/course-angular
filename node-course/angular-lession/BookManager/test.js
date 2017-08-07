var pathname = '/book/100';
var reg = /^\/book(\/\d+)?$/;
console.log(pathname.match(reg)[1]);
//console.log(reg.exec(pathname)[1]);