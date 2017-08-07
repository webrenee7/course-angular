//1.buffer 固定的内存 很像数组 但是不能更改大小
//2.声明的方式
//1).通过长度创建
//产生的buffer是随机的 并且最大0xff  16进制
var buffer = new Buffer(3);
buffer.fill(0);
console.log(buffer);
//2).通过数组来构建buffer
var buffer = new Buffer(['a',-1,19]); //会自动转化成16进制
//超过255 则对256取模,不识别则为0，负数则加256
console.log(buffer);
//3).通过字符串构建buffer
var buffer = new Buffer('珠');
console.log(buffer);
//buffer.slice() forEach
var buffer = new Buffer([1,2,3,4,5]);
var newBuffer = buffer.slice(0,3);//包前不包后
newBuffer[0] = 128;
console.log(buffer); //这里存的是地址
//字符串具有不变性
//3.copy
//拷贝的方法
var buffer = new Buffer(12);
var buffer1 = new Buffer('珠峰');
var buffer2 = new Buffer('培训');
// targetBuffer 目标buffer, targetStart目标的开始, sourceStart源的开始, sourceEnd 源的结束
buffer1.copy(buffer,0,0,6);
buffer2.copy(buffer,6,0,6);
console.log(buffer.toString());
//buffer可以调用toString转换成字符串
var buffer = new Buffer(9);
var buffer1 = new Buffer('我很');
var buffer2 = new Buffer('帅');
var buffer3 = new Buffer('帅');
buffer2.copy(buffer,6);
buffer1.copy(buffer,0);
console.log(buffer.toString()); //后两个参数默认不写表示从头拷贝到尾部

//concat 返回一个新的数组
console.log(Buffer.concat([buffer1,buffer2,buffer3]).toString());

//myConcat 可以将多个buffer拼接到一起如果 长度过长截取有效长度，过短截取指定长度，不给默认全拼接
Buffer.myConcat = function (list,totalLength) {
    //1.判断totalLength是否传递
    if (typeof totalLength == 'undefined') {
        //3.长度没有传 算出数组中的每个buffer的长度累加length 构建buffer在一个个copy进去
        totalLength = 0;
        list.forEach(function (item) {
            totalLength += item.length;
        });
    }
    //2.如果传递构建一个大buffer将list中buffer一个个copy到buffer上，最后截取有效长度slice()
    var buffer = new Buffer(totalLength);
    var index = 0;
    list.forEach(function (item) {
        item.copy(buffer, index);
        index += item.length; //维护偏移量 下一次的拷贝 是上一次的考入的长度的累加
    });
    return buffer.slice(0, index);//index是最后考入的总长度
    //4.如果过短不考虑
};
console.log(Buffer.myConcat([buffer1,buffer2,buffer3]).toString());

//判断类型 判断是不是buffer
console.log(Buffer.isBuffer(new Buffer(3)));