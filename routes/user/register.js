var express = require('express');
var router = express.Router();
var db = require('../../models');

router.post('/user/register', function(req, res, next) {
	db.user.findAll({
        where:{
            username:req.body.username
        }
   	}).then(function(data){
    	if(data[0]){
    		res.send({status:-1,desc:"用户已经存在,不能重复注册"});
    	}else{
			db.user.create({
				username: req.body.username,
				password: req.body.password
			});
			res.send({status:0,desc:"注册成功"});
    	}
    })
});

module.exports = router;