//Buffer可以表示一段内存空间
console.log(Buffer); //构造函数 在node中是global上的属性
//逢二进一
//1. 1个字节 由8位二进制组成  在utf8中一个汉字3个字节组成，node不支持gbk
// 1b = 8bit 1024b = 1kb

//二进制 转 10进制
//当前位的值* 当前进制^(所在位-1)
//计算机中存储的都是2进制，表现的是16进制Buffer存的是16进制的
var sum  = 0;
for(var i = 0; i<8;i++){
    sum+=Math.pow(2,i);
}
console.log(sum); //255   2^8-1   ff    15*16^1+15*16^0
//每一个汉字 由三个ff<=的字节组成