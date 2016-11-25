var express = require('express');
var router = express.Router();
var path = require('path');
var db = require('../../models');

router.post('/admin/dog/add', function(req, res, next) {
	/*db.package.findAll({
		where: {
			title: req.body.zipName
		}
	}).then(function(data){
		console.log(data);
		if(data.length>0){
			res.send({
				status:-1,
				desc:"已经有此包"
			});
		}else{
			
		}
	});*/

	db.package.create({
		title: req.body.zipName,
		description: req.body.zipDesc,
		url: req.body.zipPackage,
		status: -1
	});

	res.send({
		status: 0,
		desc: "添加成功"
	});
});

module.exports = router;