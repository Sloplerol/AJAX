// 1.引入express
const { response, request } = require('express');
const express = require('express');
// 2.创建app对象
const app = express();
// 3.创建路由规则
// request对请求报文的封装
// response对响应报文的封装
app.get('/',(request,response)=>{
//    设置一个响应
    response.send('这是一个服务端');
})
// 设置监听端口
app.listen(9000,()=>{
    console.log('9000端口启动中');
})