const mongoose=require('mongoose');

const TaskInfo= new mongoose.Schema({

    task:{
        type:String,
        required:true,
        unique:true
    },

    date:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    name:{
        type:String,
        required:true
    }
},{
    timestamps:true  //This will automatically save timestamps about when was user 'created' and when was he 'updated'.
});

const taskInfo= mongoose.model('User_Task_Info', TaskInfo);

module.exports=taskInfo;