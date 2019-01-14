// #KEYWORDS:- [path module usage, path.join]
const path=require('path');
const express=require('express');

const app=express();

const publicPath=path.join(__dirname, '../public');
const PORT=process.env.PORT||3000;

console.log('PATH TO REACH INDEX.HTML WITH PATH MODULE:-'+ publicPath);
console.log('PATH TO REACH INDEX.HTML WITHOUT PATH MODULE:'+__dirname+ '../public'+'/index.html');

app.use(express.static(publicPath));


app.get('/',(req,res)=>{
    res.render(publicPath+'/index.html')
})

app.listen(PORT,()=>{
    console.log(`server started at PORT:- ${PORT}`);
})