module.exports.home=function(req,res){
    return res.render('home',{
        title:"Home"
    });
}

// res.render('fine name inside views directory',{})
//module.exports.actionName= function(req,res)