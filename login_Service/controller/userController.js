
const userDto=require('../model/userDto');
const bcrypt = require('bcrypt');


const saveUser=(req,resp)=>{
        bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        const user= new userDto({
            email :req.body.email,
            password :hash
        }) ;

        user.save().then(res=>{
            console.log(res);
        }).catch(err=>{
            resp.status(500).json(err);
        })
    });
}


const checkLogin=(req,resp)=>{
    userDto.findOne({email : req.headers.email}).then(res=>{
        if(res!=null){
            bcrypt.compare(req.headers.password, res.password, function(err, result) {
                resp.status(200).json(res);
            })
        }

    }).catch(err=>{
        resp.status(500).json(err);
    })
};
module.exports={
    saveUser,
    checkLogin
}
