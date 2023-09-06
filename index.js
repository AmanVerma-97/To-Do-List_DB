const express=require('express');
const app=express();
const port= 8000;

app.listen(port, function(err){
    if(err){
        console.log(`Error occured during connection: ${err}`);
        return;
    }
    console.log(`Sucessfully connected to port: ${port}`);
})