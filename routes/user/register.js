var express = require('express');
var router = express.Router();
var db = require('../../models');

router.post('/admin/user/register', function(req, res, next) {
	var roleId = 0;
	db.user.findAll({
		where: {
			username: req.body.username
		}
	}).then(function(data) {
		if(data[0]) {
			res.send({
				status: -1,
				desc: "用户已经存在,请直接登录，或者换个名字注册"
			});
		} else {
			console.log("dfc");
			console.log(req.body);
			if(req.body.username == "admin") {
				roleId = 1;
			} else {
				roleId = 0;
			}
			db.user.create({
				username: req.body.username,
				password: req.body.password,
				roleId: roleId
			});
			res.send({
				status: 0,
				desc: "注册成功"
			});
		}
	})
});
module.exports = router;