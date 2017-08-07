var url = require('url');
var urlObj = url.parse('https://USERNMAE:PASSWORD@www.baidu.com:80/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=asd&rsv_pq=bd2e26c9003b2d10&rsv_t=68a7lUZ8e0%2BjygOUbzyAKTS7JVQoQz4oq%2FwrmacEF0aOWCKgvnpUUHucAgs&rqlang=cn&rsv_enter=1&rsv_sug3=4&rsv_sug1=3&rsv_sug7=100&rsv_sug2=0&inputT=440&rsv_sug4=484#TOP',true);
console.log(urlObj);
//true可以将query字符串转换成对象 pathname代表的是访问的路径