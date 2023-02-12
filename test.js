const express = require('express');
const app = express();
app.all('/service',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    // send的必须是一个对象或者一个buffer
    // response.send('fuck you')
    const obj = {
        name: 'zjj'
    }
    let str = JSON.stringify(obj);
    response.send(str);
})
app.all('/delay',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(()=>{
        response.send('hello world');
    },3000)
})
app.get('/get',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    const data = {name:'zjj'}
    response.send(JSON.stringify(data));
})
app.post('/post',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('asd');
})
app.all('/ajax',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    let data = {name:'223'}
    response.send(JSON.stringify(data));
})

app.post('/axios',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    response.send('hello wrold');
})
app.listen(80,function(){
    console.log('端口服务已启动');
})