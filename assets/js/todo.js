/*
    The "ReferenceError: require is not defined" error occurs when the require function is used in a JavaScript file 
    that is intended to be executed in a web browser, rather than in a Node.js environment.

    So, in this case, an error is thrown if you try to use the require function in a file that is intended 
    to be executed in a web browser.
*/

// console.log("reached here");

// // const UserSignUp=require('../../models/signup');
// import userSignUp from '../../models/signup.js';
// // const UserTasks=require('../../models/tasks');
// import userTasks from '../../models/tasks.js';

// const Myuser = async function(req,res){
//     console.log("Here");
//     if(req.cookies.user_id){
//         const user= await userSignUp.findById(req.cookies.user_id);
//         return user;
//     }
// }
// console.log(Myuser());