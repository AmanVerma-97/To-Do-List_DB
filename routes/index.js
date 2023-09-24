//This is the index.js file that is loaded once the connection has been established.
//We will go to different files/routes from this index.js file.

const express= require('express');

//Use the express.Router class to create modular, mountable route handlers. 
//A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
const router=express.Router();

const homeController=require('../controllers/home_controllers');

console.log("Router loaded");

router.get('/',homeController.home); //homepage

router.get('/signin', homeController.signin); //sign-in page

router.get('/signup', homeController.signup); //sign-up page

router.get('/addtask', homeController.addTask); //add-task page

router.post('/adduser',homeController.addUser); //confirm signup

router.post('/checkuser', homeController.checkUser); //confirm login

router.post('/addtaskDB', homeController.addTasktoDB); //add task to database

router.post('/deleteuser', homeController.deleteUser); //logout

router.post('/delete', homeController.deleteTask); //delete task

module.exports=router;