const express=require('express');
const app=express();
const port= 8000;

//adding layout library
const expressLayouts=require('express-ejs-layouts');

app.use(expressLayouts);
//This tells app to search for a wrapper layout around different views/routes.


//extract style and script from sub-pages into 'layout' page.
//using this individual pages can be styles independently.
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


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