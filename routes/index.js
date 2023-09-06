//This is the index.js file that is loaded once the connection has been established.
//We will go to different files/routes from this index.js file.

const express= require('express');

//Use the express.Router class to create modular, mountable route handlers. 
//A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
const router=express.Router();

const homeController=require('../controllers/home_controllers');

console.log("Router loaded");

router.get('/',homeController.home);

module.exports=router;