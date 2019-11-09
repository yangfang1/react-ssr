const express=require('express');
const fs=require('fs');
const path=require('path');
const ReactSSR = require('react-dom/server');//react服务端渲染模块
const app=express();
const template=fs.readFileSync(path.resolve(__dirname,'../dist/index.html'),'utf-8')//同步地去读取index.html的内容
const serverBundle=require('../dist/serverBundle').default;
app.get('*',(req,res)=>{
    const string=ReactSSR.renderToString(serverBundle);
    res.send(template.replace("<!--app-->",string))
})
app.listen(8080,()=>{
    console.log("sucess listen on port 8080")
})