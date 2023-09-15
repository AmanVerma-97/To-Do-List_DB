const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/to_do_list");
//this means it will connect to Server on port number '27017' and have name to_do_list.
//this is default port of studio 3T, but we can create connections with different port numbers as well.

const db=mongoose.connection;

db.on('error', console.error.bind(console,"Error occured during connection"));

db.once('open',function(){
    console.log("Mongoose Db connected sucessfully");
})

module.exports=db; 