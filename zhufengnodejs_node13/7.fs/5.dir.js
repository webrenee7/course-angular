var fs = require('fs');
/*function makep(path) {
    // a  a/b   a/b/c  a/b/c/d
    var p = path.split('/');
    for(var i = 0 ; i<p.length;i++){
        var cur = p.slice(0,i+1).join('/');
        //判断文件是否存在
        var flag = fs.existsSync(cur);
        if(!flag)fs.mkdirSync(cur);
    }
}
makep('a/b/c/d');*/
//1.作业：写一个 异步创建的方法 mkdir+exists(递归)
fs.mkdir('e',function () {
    fs.exists('e/b',function (flag) { //flag表示文件是否存在
       if(!flag){
          fs.mkdir('e/b',function (err) {
              console.log(err);
          });
       }
   })
});
