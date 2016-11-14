var express = require('express');
var router = express.Router();
var db = require('../../models');

router.post('/user/loginIn', function(req, res, next) {
	db.user.findAll({
		where: {
			username: req.body.username,
			password: req.body.password
		}
	}).then(function(data) {
		if(data.length > 0) {
			res.send({
				status: 0,
				desc: "登录成功"
			});
		} else {
			res.send({
				status: -1,
				desc: "用户名或密码不正确，请重新登录"
			});
		}
	});
	//res.send({status:0,x:1,y:2});
});

module.exports = router;