// #KEYWORDS:- [path module usage, path.join, render html file in server.js without app.render]
const path=require('path');
const express=require('express');
const http=require('http');


const socketIO=require('socket.io')

const app=express();

const publicPath=path.join(__dirname, '../public');
const PORT=process.env.PORT||3000;

console.log('PATH TO REACH INDEX.HTML WITH PATH MODULE:-'+ publicPath);
console.log('PATH TO REACH INDEX.HTML WITHOUT PATH MODULE:'+__dirname+ '../public'+'/index.html');


// here we are not using app.render to render the index.html page
// instead whatever html file is available in public dir will be
// rendered automatically by defining below middleware.
app.use(express.static(publicPath));

const server=http.createServer(app);
// Once we have access to io variable after defining http.createServer,
// we get access to a JS library which makes it easy to work on socket io on the client side.
//  This lib is available at localhost:3000/socket.io/socket.io.js

const io=socketIO(server);

// There are list of inbuilt events which makes the web socket works one of them
// is connection. It works as follows.  We get access to socket variable from
// the client side. 
io.on('connection',(socket)=>{
    const d1=new Date();
    console.log(`NEW USER IS CONNECTED ON ${d1.toTimeString()} ${d1.toDateString()}`);
    socket.on('disconnect',()=>{
        console.log('DISCONNECTED FROM CLIENT');
    })
})



server.listen(PORT,()=>{
    console.log(`server started at PORT:- ${PORT}`);
})