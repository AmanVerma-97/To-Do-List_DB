const mongoose=require('mongoose');

const SignupInfo= new mongoose.Schema({

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
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

const userSignUp= mongoose.model('UserSignUp', SignupInfo);

module.exports=userSignUp;