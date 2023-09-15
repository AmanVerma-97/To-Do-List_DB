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