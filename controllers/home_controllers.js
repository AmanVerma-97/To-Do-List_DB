const UserSignUp=require('../models/signup');
const UserTasks=require('../models/tasks');

module.exports.home=function(req,res){
    return res.render('home',{
        title:"TO DO LIST"
    });
}

// res.render('fine name inside views directory',{})
//module.exports.actionName= function(req,res) 

module.exports.signup=function(req,res){
    return res.render('signup', {
        title:"SIGN UP"
    });
}

module.exports.signin=function(req,res){
    return res.render('signin', {
        title:"SIGN IN"
    });
}

module.exports.addTask= async function(req,res){
    if(req.cookies.user_id){
        const user= await UserSignUp.findById(req.cookies.user_id);
        if(user){
            return res.render('addtask',{   //render directly takes name of ejs file to be displayed.
                title:"TASKS",
                user:user
            });
        }
        else{
            return res.redirect('/');  //redirect takes the route[URL] to be displayed.
        }
    }
    else{
        return res.redirect('/');
    }
}


//sign-up process
module.exports.addUser= async function(req,res){
    console.log("Reached here for sign-up")
    if(req.body.password!=req.body.confirm_password){
        console.log("passwords should match");
        return res.redirect('back'); //very important to write 'return' here so that function doesn't get implemented further.
    }

    const user = await UserSignUp.findOne({email: req.body.email})     //Model.findOne();
        
    if(!user){  //no user with this email exist.

        const addUser={
            email:req.body.email,
            password:req.body.password,
            name:req.body.name
        }

        const newUserAdded=UserSignUp.create(addUser);
        if(newUserAdded){
            console.log("User Added successfully", newUserAdded);
            return res.redirect('/signin');
        }
        else{
            console.log("Error occured while adding new user");
        }
        
    }
    else{
        console.log("user already exist.");
        return res.redirect('back');
    }
}


//sign-in check
module.exports.checkUser= async function(req,res){
    console.log("Reached here for sign-in");
    const findUser= await UserSignUp.findOne({email:req.body.email});
    if(findUser){

        // console.log("User: ", findUser);

        if(req.body.password==findUser.password){
            console.log("Successfully logged in");

            res.cookie('user_id', findUser._id); //creating a session with the help of cookie.

            return res.redirect('/addtask');
        }
        else{
            console.log("Password didn't match");
        }
    }
    else{
        console.log("No such user found!!");
    }
    return res.redirect('back');
}


//adding task and checking
module.exports.addTasktoDB= async function(req,res){
    console.log("Reached here for adding tasks")

    const task = await UserTasks.findOne({task: req.body.task})     //Model.findOne();
        
    if(!task){  //no no such task exist.

        const addTask={
            task:req.body.task,
            date:req.body.date,
            description:req.body.description,
            name:req.body.name
        }

        const newTaskAdded=UserTasks.create(addTask);
        if(newTaskAdded){
            console.log("task Added successfully", newTaskAdded);
            return res.redirect('back');
        }
        else{
            console.log("Error occured while adding new task");
        }
        
    }
    else{
        console.log("task already exist.");
        return res.redirect('back');
    }
}

//logour user and delete cookie
module.exports.deleteUser=function(req,res){
    console.log("Reached here to delete cookie");
    
    res.clearCookie('user_id');
    
    return res.redirect('/signin');
}