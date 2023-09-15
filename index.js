const express=require('express');

const port= 8000;

const dbMongoose=require('./config/mongoose');
//adding layout library
const expressLayouts=require('express-ejs-layouts');

const cookieParser=require('cookie-parser');

const app=express();

app.use(expressLayouts);
//This tells app to search for a wrapper layout around different views/routes.

app.use(cookieParser());

//path for static content
app.use(express.static('./assets'));
//extract style and script from sub-pages into 'layout' page.
//using this individual pages can be styles independently.
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//body parser to handle post/put/get request
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


//use express Router to load the router module in the app
app.use('/',require('./routes'));

//set-up our view engine
app.set('view engine','ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        console.log(`Error occured during connection: ${err}`);
        return;
    }
    console.log(`Sucessfully connected to port: ${port}`);
})