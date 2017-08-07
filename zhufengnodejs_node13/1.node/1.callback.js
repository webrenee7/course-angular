//  先读后写
function read(callback) {
    setTimeout(function () {
        console.log('读好了');
        callback();
    },3000);
}
function write() {
    console.log('写入');
}
read(write);
