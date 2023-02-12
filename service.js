// 1.引入express
const { response, request } = require('express');
const express = require('express');
// 2.创建app对象
const app = express();
// 3.创建路由规则
// request对请求报文的封装
// response对响应报文的封装
app.get('/service', (request, response) => {
    // 设置响应头  允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //    设置一个响应
    response.send('这是一个服务端');
})
app.post('/service', (request, response) => {
    // 设置响应头  允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //    设置一个响应
    response.send('这是一个服务端');
})
app.all('/json-service', (request, response) => {
    // 设置响应头  允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //    设置一个响应

    const obj = {
        rname: 'ljm'
    }
    // 服务端发送响应请求必须是字符串类型
    // 可以利用JSON方法将别的类转化为字符串
    let str = JSON.stringify(obj);
    response.send(str);
})
app.all('/ie', (request, response) => {
    // 设置响应头  允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //    设置一个响应
    response.send('这是一个ie缓存');
    // 当修改send数据里的内容 ie会走缓存还是输出原来的内容
})
app.all('/delay', (request, response) => {
    // 设置响应头  允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //    设置一个响应
    setTimeout(function(){
        response.send('这是一个延迟器');
    },3000)
})
app.all('/connect', (request, response) => {
    // 设置响应头  允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //    设置一个响应
    setTimeout(function(){
        response.send('qingque');
    },3000)
})
app.all('/jquery-service', (request, response) => {
    // 设置响应头  允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //    设置一个响应
    let obj = {
        rname: 'zjj',
        age:18
    }
    response.send(JSON.stringify(obj));
    // 当修改send数据里的内容 ie会走缓存还是输出原来的内容
})
app.all('/ajax-service', (request, response) => {
    // 设置响应头  允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //    设置一个响应
    let obj1 = {
        rname: 'zjj',
        age: 18
    }
    setTimeout(function(){
        response.send(JSON.stringify(obj1));
    },1000)
    // 当修改send数据里的内容 ie会走缓存还是输出原来的内容
    
})
app.all('/axios-service', (request, response) => {
    // 设置响应头  允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    //可以自定义设置头信息了
    let obj2 = {
        rname: 'zjj',
        age: 18
    }
    response.send(JSON.stringify(obj2));
    // 当修改send数据里的内容 ie会走缓存还是输出原来的内容
})
app.all('/fetch-service', (request, response) => {
    // 设置响应头  允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置自定义头信息
    //    设置一个响应
    let obj = {
        rname: 'zjj',
        age: 29
    }
    response.send(JSON.stringify(obj));
    // 当修改send数据里的内容 ie会走缓存还是输出原来的内容
})
app.get('/jsonp-service',(request,response)=>{
    const obj = {
        name: 'zjj'
    }
    let str = JSON.stringify(obj);
    response.send(`getdata(${str})`);
})
app.get('/exist-username',(request,response)=>{
    const obj = {
        exist: 1,
        msg: '已存在'
    }
    let str = JSON.stringify(obj);
    response.send(`handle(${str})`);
})
app.get('/jquey-jsonp-server',(request,response)=>{
    const obj = {
        sex: 'male',
        weight: 12
    }
    let str = JSON.stringify(obj);
    response.send(`${str}`);
})

app.get('/server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    // response.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:5500');//规定只有来自5500端口才可以发送请求
    response.send('asdasj')
})
// 设置监听端口
app.listen(9000, () => {
    console.log('9000端口启动中');
})
//想要启动当前端口需要control+c将上一个已启动的端口释放
