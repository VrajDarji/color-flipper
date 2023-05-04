const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.listen('3000',function(){
    console.log('live');
})
app.get('/',function(req,res){
    res.sendFile(__dirname+'/server.html');
})


