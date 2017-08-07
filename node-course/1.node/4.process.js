// process 进程 每一个进程都有一个id号
var i = 0;
//1. process.exit()退出进程
setInterval(function () {
    // i++;
    // if(i==3){
    //     process.exit()
    // }
},1000);
//2. 获取id号
console.log(process.pid);
//3. 杀死进程 process.kill

